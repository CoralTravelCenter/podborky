import {renderSingleHotelCard} from "../render-actions/generateCard";
import {fetchPackageArrivalLocations} from "./fetchPackageArrivalLocations";
import {fetchPackageAvailableDates} from "./fetchPackageAvailableDates";
import {fetchPackageAvailableNights} from "./fetchPackageAvailableNights";
import {findObjectByValue} from "./findObjectByValue";
import {fetchPackagePriceSearchEncrypt} from "./fetchPackagePriceSearchEncrypt";
import {findFlightByExactDate} from "./findExactCharterDates";

function getArrivalLocations(arrivalLocations, el) {
  return arrivalLocations.find(arrivalLocation => arrivalLocation.name === el.hotel);
}

export async function processHotelData(hotelBlock, idx) {
  const containerId = idx + 1;
  const cacheKey = `hotelData_${idx}`;
  const cached = sessionStorage.getItem(cacheKey);

  const loadingBox = document.querySelector(`.tab-block[data-content="${containerId}"] .loading-box`);
  if (loadingBox) {
    loadingBox.style.display = "block";
    loadingBox.dataset.hidden = ""; // сбрасываем на всякий случай
  }

  const container = document.querySelector(`.tab-block[data-content="${containerId}"] .cards-container`);
  if (container) container.innerHTML = "";

  if (cached) {
    const parsedHotels = JSON.parse(cached);
    parsedHotels.forEach((hotel, i) => {
      renderSingleHotelCard(hotel, containerId);
    });

    if (loadingBox) loadingBox.style.display = "none";
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
    renderSingleHotelCard(el, containerId);

    // 🟢 Скрыть лоадер после первой карточки
    if (loadingBox && !loadingBox.dataset.hidden) {
      loadingBox.style.display = "none";
      loadingBox.dataset.hidden = "true";
    }
  }

  if (loadingBox) delete loadingBox.dataset.hidden;

  sessionStorage.setItem(cacheKey, JSON.stringify(processedHotels));
  return processedHotels;
}
