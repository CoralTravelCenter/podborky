import {renderSingleHotelCard} from "../render-actions/generateCard";
import {fetchPackageArrivalLocations} from "./fetchPackageArrivalLocations";
import {fetchPackageAvailableDates} from "./fetchPackageAvailableDates";
import {fetchPackageAvailableNights} from "./fetchPackageAvailableNights";
import {findObjectByValue} from "./findObjectByValue";
import {fetchPackagePriceSearchEncrypt} from "./fetchPackagePriceSearchEncrypt";
import {findFlightByExactDate} from "./findExactCharterDates";
import {removeSkeletonByIndex} from "../render-actions/removeSkeletons"; // примеры импорта

function getArrivalLocations(arrivalLocations, el) {
  return arrivalLocations.find(arrivalLocation => arrivalLocation.name === el.hotel);
}

export async function processHotelData(hotelBlock, idx) {
  const cacheKey = `hotelData_${idx}`;
  const cached = sessionStorage.getItem(cacheKey);

  if (cached) {
    const parsedHotels = JSON.parse(cached);

    const container = document.querySelector(`.tab-block[data-content="${idx + 1}"] .cards-container`);
    if (container) container.innerHTML = ""; // 💥 защита от дублирования

    parsedHotels.forEach((hotel, i) => {
      removeSkeletonByIndex(i, idx + 1);
      renderSingleHotelCard(hotel, idx + 1);
    });

    return parsedHotels;
  }


  const hotelsNames = hotelBlock.hotels.map(el => el.hotel);
  const arrivalLocations = await fetchPackageArrivalLocations(hotelsNames);

  const processedHotels = [];

  for (let i = 0; i < hotelBlock.hotels.length; i++) {
    const el = hotelBlock.hotels[i];
    el.price = [];
    el.visual = null;

    const currentHotel = getArrivalLocations(arrivalLocations, el);
    if (!currentHotel) continue;

    const arrivalDates = await fetchPackageAvailableDates(currentHotel);
    if (!arrivalDates?.result?.dates?.length) continue;

    for (const date of el.dates) {
      const targetDate = findFlightByExactDate(date, arrivalDates.result.dates);
      if (!targetDate) continue;

      const availableNights = await fetchPackageAvailableNights(currentHotel, targetDate.date);
      const targetNights = findObjectByValue(availableNights.result.nights, "value", 7);
      if (!targetNights) continue;

      const productData = await fetchPackagePriceSearchEncrypt(
        currentHotel,
        targetDate.date,
        targetNights.value
      );

      const priceAmount = productData?.result?.products?.[0]?.offers?.[0]?.price?.amount;
      const visual = productData?.result?.products?.[0]?.hotel?.images?.[4]?.sizes?.[0]?.url;

      if (priceAmount) {
        el.price.push({ date: targetDate.date, amount: priceAmount });
      }

      if (visual) {
        el.visual = visual;
      }
    }

    processedHotels.push(el);

    // 🧼 Удаляем соответствующий скелет и рендерим карточку
    removeSkeletonByIndex(i, idx + 1);
    renderSingleHotelCard(el, idx + 1);
  }

  sessionStorage.setItem(cacheKey, JSON.stringify(processedHotels));
  return processedHotels;
}
