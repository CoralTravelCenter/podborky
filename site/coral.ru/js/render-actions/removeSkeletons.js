export function removeSkeletonByIndex(index, containerId) {
  const container = document.querySelector(`.tab-block[data-content="${containerId}"] .skeleton-container`);
  if (!container) return;

  const skeleton = container.querySelector(`.skeleton[data-index="${index}"]`);
  if (skeleton) skeleton.remove();
}
