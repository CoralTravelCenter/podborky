import {hostReactAppReady} from "../../common/js/usefuls.js";
import {processHotelData} from "./api-actions/processHotelData";

const toursByCountry = window._toursByCountry

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
  document.querySelector('[data-active-tab]').setAttribute("data-active-tab", toursByCountry[tabId - 1].country);
}

async function handleTabClick(button, idx) {
  const tabId = button.getAttribute("data-tab");
  setActiveTab(button, tabId);
  ym(96674199,'reachGoal', 'country-filter', {country: toursByCountry[tabId - 1].country});
  const hotelBlock = toursByCountry[idx];
  try {
    await processHotelData(hotelBlock, idx);
  } catch (error) {
    console.error("Ошибка загрузки данных", error);
  }
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
    try {
      await processHotelData(toursByCountry[defaultIdx], defaultIdx);
    } catch (error) {
      console.error("Ошибка загрузки данных", error);
    } finally {
      ym(96674199,'reachGoal', 'country-filter', {country: toursByCountry[defaultIdx].country});
    }
  }

  // Обработчики кликов
  buttons.forEach((button, idx) => {
    button.addEventListener("click", () => handleTabClick(button, idx));
  });
})();
