const shareOverlayLink = document.querySelector(".post_info-data__share-overlay");
const shareOverlay = document.querySelector(".share-overlay");

shareOverlayLink.addEventListener("mouseover", () => {
  shareOverlay.style.display = "flex";
  shareOverlay.style.opacity = "1";
})
shareOverlayLink.addEventListener("mouseout", () => {
  shareOverlay.style.display = "none";
  shareOverlay.style.opacity = "0";
})