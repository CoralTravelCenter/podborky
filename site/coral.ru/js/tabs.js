import {hostReactAppReady} from "../../common/js/usefuls.js";
import {toursByCountry} from "./data";
import {fetchPackageArrivalLocations} from "./api-actions/fetchPackageArrivalLocations";
import {fetchPackageAvailableDates} from "./api-actions/fetchPackageAvailableDates";
import {findExactCharterDates} from "./api-actions/findExactCharterDates";

function createButtonElement(country, idx) {
  const tabButton = document.createElement("button");
  if (idx === 0) tabButton.classList.add('js-active')
  tabButton.setAttribute("data-tab", `${idx + 1}`);
  tabButton.textContent = country;
  return tabButton;
}

function renderButtonElement(container) {
  const countriesMap = toursByCountry.map(country => country.country);
  countriesMap.map((country, idx) => container.append(createButtonElement(country, idx)));
}

function getHotelNames(hotelNames) {
  return Array.from(
    new Set(hotelNames.map(item => item.hotel))
  );
}

function setActiveTab(button, tabId) {
  const buttons = document.querySelectorAll('.tab-buttons button');
  const contents = document.querySelectorAll('.tab-block');
  buttons.forEach(btn => btn.classList.remove('js-active'));
  contents.forEach(content => content.classList.remove('js-active'));
  button.classList.add('js-active');
  document.querySelector(`.tab-block[data-content="${tabId}"]`).classList.add('js-active');
}

async function handleTabClick(button, idx) {
  const tabId = button.getAttribute('data-tab');
  setActiveTab(button, tabId);

  //1) Получаем названия отелей табы
  const hotelBlock = toursByCountry[idx];
  if (!hotelBlock?.hotels?.length) return;
  const hotelNames = getHotelNames(hotelBlock.hotels);

  //2) Получаем данные по локациям
  const arrivalLocations = await fetchPackageArrivalLocations(hotelNames);
  console.log(arrivalLocations)

  //3) Проверяем полетку на необходимые даты
  const allDates = hotelBlock.hotels.flatMap(hotel => hotel.dates);
  const availableDates = await fetchPackageAvailableDates(arrivalLocations)
  const data = await findExactCharterDates(allDates, availableDates.result.dates)
  console.log(data)
}

(async () => {
  await hostReactAppReady();
  const tabsButtonContainer = document.querySelector("#tabs-button-container");
  renderButtonElement(tabsButtonContainer);

  const buttons = document.querySelectorAll('.tab-buttons button');
  buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
      handleTabClick(button, idx)
    });
  });
})()
