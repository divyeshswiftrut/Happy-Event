function loadMoreItems() {
  // Get all hidden items
  const hiddenItems = document.querySelectorAll(".grid-item.hidden");

  // Show up to 4 hidden items
  for (let i = 0; i < 2 && i < hiddenItems.length; i++) {
    hiddenItems[i].classList.remove("hidden");
  }

  // If no more hidden items, hide the button
  if (document.querySelectorAll(".grid-item.hidden").length === 0) {
    document.querySelector(".grid-button").style.display = "none";
  }
}
