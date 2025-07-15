export function renderHotelCards(results, tabId) {
  const container = document.querySelector(`.tab-block[data-content="${tabId}"] .cards-container`);
  if (!container) return;

  container.innerHTML = ""; // очищаем старые карточки

  results.forEach(item => {
    console.log(item)
    const dates = ()=> {
      return item.dates.map(date=> {
        const reformatDate = date.split('-')
        return `<span class="hotel-date">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
  <path d="M1.33337 3.66663C1.33337 2.56206 2.2288 1.66663 3.33337 1.66663H12.6667C13.7713 1.66663 14.6667 2.56206 14.6667 3.66663V11.6666C14.6667 12.7712 13.7713 13.6666 12.6667 13.6666H3.33337C2.2288 13.6666 1.33337 12.7712 1.33337 11.6666V3.66663Z" stroke="#535353" stroke-width="0.7" stroke-linejoin="round"/>
  <path d="M1.33337 3.66663C1.33337 2.56206 2.2288 1.66663 3.33337 1.66663H12.6667C13.7713 1.66663 14.6667 2.56206 14.6667 3.66663V4.99996H1.33337V3.66663Z" stroke="#535353" stroke-width="0.7" stroke-linejoin="round"/>
  <path d="M3.33337 2.66671V0.333374" stroke="#535353" stroke-width="0.7"/>
  <path d="M8 2.66671V0.333374" stroke="#535353" stroke-width="0.7"/>
  <path d="M12.6666 2.66671V0.333374" stroke="#535353" stroke-width="0.7"/>
  <path d="M3.66663 7.66663H4.99996" stroke="#535353" stroke-width="0.7"/>
  <path d="M3.66663 10.3334H4.99996" stroke="#535353" stroke-width="0.7"/>
  <path d="M7.33337 7.66663H8.66671" stroke="#535353" stroke-width="0.7"/>
  <path d="M7.33337 10.3334H8.66671" stroke="#535353" stroke-width="0.7"/>
  <path d="M11 7.66663H12.3333" stroke="#535353" stroke-width="0.7"/>
  <path d="M11 10.3334H12.3333" stroke="#535353" stroke-width="0.7"/>
</svg>
            ${reformatDate[2]}.${reformatDate[1]}
        </span>`
      }).join('');
    }
    const card = document.createElement("div");
    card.className = "hotel-card";
    card.innerHTML = `
      <div class="hotel-name"><strong>${item.hotel}</strong></div>
      <div class="hotel-dates">
           ${dates()}
      </div>
      <div class="hotel-price">
        Цена: <strong>${item.price.toLocaleString()} ₽</strong>
      </div>
    `;
    container.append(card);
  });
}
