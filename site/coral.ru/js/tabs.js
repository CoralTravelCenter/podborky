import {hostReactAppReady} from "../../common/js/usefuls.js";
import {toursByCountry} from "./data";
import {fetchPackageArrivalLocations} from "./api-actions/fetchPackageArrivalLocations";
import {fetchPackageAvailableDates} from "./api-actions/fetchPackageAvailableDates";
import {findFlightByExactDate} from "./api-actions/findExactCharterDates";
import {fetchPackageAvailableNights} from "./api-actions/fetchPackageAvailableNights";
import {findObjectByValue} from "./api-actions/findObjectByValue";
import {fetchPackagePriceSearchEncrypt} from "./api-actions/fetchPackagePriceSearchEncrypt";
import {renderHotelCards} from "./render-actions/generateCard";

function createButtonElement(country, idx) {
  const tabButton = document.createElement("button");
  if (idx === 0) tabButton.classList.add("js-active");
  tabButton.setAttribute("data-tab", `${idx + 1}`);
  tabButton.textContent = country;
  return tabButton;
}

function renderButtonElements(container) {
  toursByCountry.forEach((t, idx) => {
    container.append(createButtonElement(t.country, idx));
  });
}

function setActiveTab(button, tabId) {
  document.querySelectorAll(".tab-buttons button").forEach(btn => btn.classList.remove("js-active"));
  document.querySelectorAll(".tab-block").forEach(content => content.classList.remove("js-active"));

  button.classList.add("js-active");
  document.querySelector(`.tab-block[data-content="${tabId}"]`).classList.add("js-active");
}

async function processHotelData(hotelBlock, idx) {
  const cacheKey = `hotelData_${idx}`;
  const cached = sessionStorage.getItem(cacheKey);

  if (cached) {
    const parsedHotels = JSON.parse(cached);
    renderHotelCards(parsedHotels, idx + 1);
    return parsedHotels;
  }

  for (const el of hotelBlock.hotels) {
    el.price = []; // инициализируем массив для цен
    
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
      if (priceAmount) {
        el.price.push({
          date: targetDate.date,
          amount: priceAmount
        });
      }
    }
  }

  // Кладём в sessionStorage только массив отелей
  sessionStorage.setItem(cacheKey, JSON.stringify(hotelBlock.hotels));

  renderHotelCards(hotelBlock.hotels, idx + 1);
  return hotelBlock.hotels;
}


async function handleTabClick(button, idx) {
  const tabId = button.getAttribute("data-tab");
  setActiveTab(button, tabId);

  const hotelBlock = toursByCountry[idx];
  await processHotelData(hotelBlock, idx);
}

(async () => {
  await hostReactAppReady();

  const tabsButtonContainer = document.querySelector("#tabs-button-container");
  renderButtonElements(tabsButtonContainer);

  const buttons = document.querySelectorAll(".tab-buttons button");

  // Автозагрузка первой вкладки
  const defaultIdx = 0;
  const defaultButton = buttons[defaultIdx];
  if (defaultButton) {
    const tabId = defaultButton.getAttribute("data-tab");
    setActiveTab(defaultButton, tabId);
    await processHotelData(toursByCountry[defaultIdx], defaultIdx);
  }

  // Обработчики кликов
  buttons.forEach((button, idx) => {
    button.addEventListener("click", () => handleTabClick(button, idx));
  });
})();
