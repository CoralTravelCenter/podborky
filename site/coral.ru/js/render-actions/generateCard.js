export function renderSingleHotelCard(item, tabId) {
  const container = document.querySelector(`.tab-block[data-content="${tabId}"] .cards-container`);
  if (!container) return;

  if (container.querySelector(`[data-hotel="${item.hotel}"]`)) return; // 🔐 анти-дубль

  const card = createHotelCard(item);
  card.setAttribute("data-hotel", item.hotel);
  container.appendChild(card);
}

function createHotelCard(item) {
  const card = document.createElement("div");
  card.className = "hotel-card";

  const visual = document.createElement("div");
  visual.className = "visual";
  const img = document.createElement("img");
  img.src = item.visual;
  img.alt = item.hotel;
  visual.append(img);

  const content = document.createElement("div");
  content.className = "content";

  content.append(createTopBlock(item));
  content.append(createMealBlock(item.meal));
  const { datesContainer, pricesContainer } = createDatesAndPrices(item);
  content.append(datesContainer);
  content.append(createIconsBlock(item));
  content.append(createPackageBlock(item.package));
  content.append(pricesContainer);

  card.append(visual, content);
  return card;
}

function createTopBlock(item) {
  const top = document.createElement("div");
  top.className = "top";

  const locationDiv = document.createElement("div");
  locationDiv.className = "hotel-location";
  locationDiv.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
      <path d="M12.8335 5.66683C12.8335 9.72673 8.50008 14.6668 8.50008 14.6668C8.50008 14.6668 4.16675 9.72673 4.16675 5.66683C4.16675 3.2736 6.10685 1.3335 8.50008 1.3335C10.8934 1.3335 12.8335 3.2736 12.8335 5.66683Z" stroke="#535353" stroke-width="0.5" stroke-linejoin="round"/>
      <path d="M8.5 7.66699C9.60457 7.66699 10.5 6.77156 10.5 5.66699C10.5 4.56242 9.60457 3.66699 8.5 3.66699C7.39543 3.66699 6.5 4.56242 6.5 5.66699C6.5 6.77156 7.39543 7.66699 8.5 7.66699Z" stroke="#535353" stroke-width="0.5" stroke-linejoin="round"/>
    </svg>
    ${item.location}
  `;

  const nameDiv = document.createElement("div");
  nameDiv.className = "hotel-name";
  nameDiv.textContent = item.hotel;

  const ratingDiv = document.createElement("div");
  ratingDiv.className = "rating";
  ratingDiv.innerHTML = `<span class="star">${getStarSvg()}</span>`.repeat(item.rating);

  top.append(locationDiv, nameDiv, ratingDiv);
  return top;
}

function createMealBlock(meal) {
  const mealDiv = document.createElement("div");
  mealDiv.className = "meal";
  mealDiv.textContent = meal;
  return mealDiv;
}

function createDatesAndPrices(item) {
  const datesContainer = document.createElement("div");
  datesContainer.className = "hotel-dates";
  const pricesContainer = document.createElement("a");
  pricesContainer.className = "prime-btn prime-btn--modefided hotel-price";
  pricesContainer.href = item.urls[0]

  pricesContainer.addEventListener("click", (e) => {
    const currentCountry = document.querySelector("[data-active-tab]");
    e.preventDefault();
    ym(96674199,'reachGoal','select-tour-page-podborka',
      {
        country:currentCountry.getAttribute('data-active-tab'),
        hotel: item.hotel
      }
    )
    window.open(pricesContainer.href, "_blank");
  })

  const dateElems = [];
  const priceElems = [];

  item.dates.forEach((date, idx) => {
    const [_y, m, d] = date.split("-");
    const dateSpan = document.createElement("span");
    dateSpan.className = "hotel-date" + (idx === 0 ? " js-active" : "");
    dateSpan.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none"><path d="M1.333 3.667a2 2 0 0 1 2-2h9.334a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2z" stroke="#535353" stroke-width=".7" stroke-linejoin="round"/><path d="M1.333 3.667a2 2 0 0 1 2-2h9.334a2 2 0 0 1 2 2V5H1.333z" stroke="#535353" stroke-width=".7" stroke-linejoin="round"/><path d="M3.333 2.667V.333M8 2.667V.333m4.667 2.334V.333m-9 7.334H5m-1.333 2.666H5m2.333-2.666h1.334m-1.334 2.666h1.334M11 7.667h1.333M11 10.333h1.333" stroke="#535353" stroke-width=".7"/></svg>
      ${d}.${m}
    `;
    datesContainer.append(dateSpan);
    dateElems.push(dateSpan);

    const formattedPrice = new Intl.NumberFormat("ru-RU").format(item.price[idx].amount).split(',')[0];
    const priceSpan = document.createElement("span");
    priceSpan.className = "price" + (idx === 0 ? " js-active" : "");
    priceSpan.textContent = `${formattedPrice} ₽`;
    priceElems.push(priceSpan);
  });

  priceElems.forEach(el => pricesContainer.append(el));

  dateElems.forEach((dateSpan, idx) => {
    dateSpan.addEventListener("click", () => {
      dateElems.forEach(el => el.classList.remove("js-active"));
      priceElems.forEach(el => el.classList.remove("js-active"));
      dateSpan.classList.add("js-active");
      priceElems[idx].classList.add("js-active");
      pricesContainer.href = item.urls[idx]
    });
  });

  return { datesContainer, pricesContainer };
}

function createIconsBlock(item) {
  const icons = document.createElement("div");
  icons.className = "info-icons";
  icons.innerHTML = `
    <div class="icon-wrapper">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M1.333 6.667a2 2 0 0 1 2-2h9.334a2 2 0 0 1 2 2V8H1.333zm0 1.333h13.334v3H13l-1-1.333H4L3 11H1.333zM2 2.667a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2H2z" stroke="#535353" stroke-width=".7" stroke-linejoin="round"/><path d="M4.333 3.667a1 1 0 0 1 1-1H6a1 1 0 0 1 1 1v1H4.333zm4.667 0a1 1 0 0 1 1-1h.667a1 1 0 0 1 1 1v1H9z" stroke="#535353" stroke-width=".7" stroke-linejoin="round"/></svg>
    </div>
    ${item.nights} н
    </div>
    <div class="icon-wrapper">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="11" viewBox="0 0 14 11" fill="none"><path d="M4.892 5.983a2.47 2.47 0 0 1 0-4.941" stroke="#535353" stroke-width=".8" stroke-linejoin="bevel"/><path d="M.5 10.375a4.39 4.39 0 0 1 4.392-4.392" stroke="#535353" stroke-width=".8" stroke-linejoin="bevel"/><circle cx="8.833" cy="3.667" r="2.625" stroke="#535353" stroke-width=".8" stroke-linejoin="bevel"/><path d="M4.167 10.958a4.667 4.667 0 1 1 9.333 0" stroke="#535353" stroke-width=".8" stroke-linejoin="bevel"/></svg>
    </div>
    на двоих
    </div>
    <div class="icon-wrapper">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="m3.558 2.845-1.88.684 2.82 2.875 7.518-2.736a1 1 0 1 0-.684-1.88L9.05 2.62 7.01.914l-2.42.172 1.64 2.56-1.32.48zM.333 9.333h13.334" stroke="#535353" stroke-width=".8" stroke-linejoin="round"/></svg>
    </div>
    из Москвы
    </div>
  `;
  return icons;
}

function createPackageBlock(pkg) {
  const pkgDiv = document.createElement("div");
  pkgDiv.className = "package";
  pkgDiv.textContent = pkg;
  return pkgDiv;
}

function getStarSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path d="M15.0732 5.1625L10.5393 4.50358L8.51248 0.394646C8.45712 0.282146 8.36605 0.191075 8.25355 0.135717C7.97141 -0.00356831 7.62855 0.112503 7.48748 0.394646L5.4607 4.50358L0.926767 5.1625C0.801767 5.18036 0.687481 5.23929 0.599981 5.32857C0.494199 5.4373 0.435907 5.58358 0.437916 5.73526C0.439925 5.88694 0.50207 6.03162 0.610695 6.1375L3.89105 9.33572L3.11605 13.8518C3.09788 13.9568 3.1095 14.0649 3.14961 14.1637C3.18972 14.2625 3.2567 14.348 3.34296 14.4107C3.42922 14.4733 3.53132 14.5106 3.63766 14.5181C3.744 14.5257 3.85034 14.5034 3.94462 14.4536L7.99998 12.3214L12.0553 14.4536C12.1661 14.5125 12.2946 14.5321 12.4178 14.5107C12.7286 14.4571 12.9375 14.1625 12.8839 13.8518L12.1089 9.33572L15.3893 6.1375C15.4786 6.05 15.5375 5.93572 15.5553 5.81072C15.6036 5.49822 15.3857 5.20893 15.0732 5.1625Z" fill="#FADB14"/></svg>`;
}
