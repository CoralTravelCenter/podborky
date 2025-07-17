export function removeSkeletons(skeletons) {
  setTimeout(()=> {
    skeletons.forEach((skeleton) => {
      skeleton.classList.add("off");
      if (!skeleton.closest('.skeleton-container').classList.contains("off")) {
        skeleton.closest('.skeleton-container').classList.add("off");
      }
    })
  }, 200)
}
