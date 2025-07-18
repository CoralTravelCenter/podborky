export function renderSkeletons(hotelBlock, containerId) {
  const container = document.querySelector(`.tab-block[data-content="${containerId}"] .skeleton-container`);
  if (!container) return;

  if (container.querySelector(".skeleton")) return; // 🛡️ Скелеты уже есть

  hotelBlock.hotels.forEach((hotel, index) => {
    const skeleton = document.createElement("div");
    skeleton.classList.add("skeleton");
    skeleton.setAttribute("data-index", index);
    container.appendChild(skeleton);
  });
}
