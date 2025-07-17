import {renderHotelCards} from "../render-actions/generateCard";
import {fetchPackageArrivalLocations} from "./fetchPackageArrivalLocations";
import {fetchPackageAvailableDates} from "./fetchPackageAvailableDates";
import {findFlightByExactDate} from "./findExactCharterDates";
import {fetchPackageAvailableNights} from "./fetchPackageAvailableNights";
import {findObjectByValue} from "./findObjectByValue";
import {fetchPackagePriceSearchEncrypt} from "./fetchPackagePriceSearchEncrypt";

export async function processHotelData(hotelBlock, idx) {
  const cacheKey = `hotelData_${idx}`;
  const cached = sessionStorage.getItem(cacheKey);

  if (cached) {
    const parsedHotels = JSON.parse(cached);
    renderHotelCards(parsedHotels, idx + 1);
    return parsedHotels;
  }

  for (const el of hotelBlock.hotels) {
    el.price = [];
    el.visual = null;

    const arrivalLocation = await fetchPackageArrivalLocations(el.hotel);
    const arrivalDates = await fetchPackageAvailableDates(arrivalLocation);

    for (const date of el.dates) {
      const targetDate = findFlightByExactDate(date, arrivalDates.result.dates);
      if (!targetDate) continue;

      const availableNights = await fetchPackageAvailableNights(arrivalLocation, targetDate.date);
      const targetNights = findObjectByValue(availableNights.result.nights, "value", 7);
      if (!targetNights) continue;

      const productData = await fetchPackagePriceSearchEncrypt(
        arrivalLocation,
        targetDate.date,
        targetNights.value
      );

      const priceAmount = productData?.result?.products?.[0]?.offers?.[0]?.price?.amount;
      const visual = productData?.result.products[0].hotel.images[4].sizes[0].url
      if (priceAmount) {
        el.price.push({
          date: targetDate.date,
          amount: priceAmount
        });
      }
      if (visual) {
        el.visual = visual;
      }
    }
  }

  // Кладём в sessionStorage только массив отелей
  sessionStorage.setItem(cacheKey, JSON.stringify(hotelBlock.hotels));

  renderHotelCards(hotelBlock.hotels, idx + 1);
  return hotelBlock.hotels;
}
