export function renderHotelCards(results, tabId) {
  const container = document.querySelector(`.tab-block[data-content="${tabId}"] .cards-container`);
  if (!container) return;

  container.innerHTML = ""; // очищаем старые карточки

  results.forEach(item => {
    const card = document.createElement("div");
    card.className = "hotel-card";
    card.innerHTML = `
      <div class="hotel-name"><strong>${item.hotel}</strong></div>
      <div class="hotel-date">Дата вылета: ${item.date}</div>
      <div class="hotel-price">
        Цена: <strong>${item.price.toLocaleString()} ₽</strong>
      </div>
    `;
    container.append(card);
  });
}
