// Select elements
const slider = document.querySelector(".slider");
const sliderCards = document.querySelectorAll(".slider-card");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");

// Variables for tracking
let currentIndex = 0;

// Function to update the slider
function updateSlider() {
  const isMobile = window.innerWidth <= 768; // Check if it's mobile view
  const visibleCount = isMobile ? 1 : 3; // Number of visible slides
  const slideWidth = sliderCards[0].offsetWidth; // Get the width of one slide
  const maxIndex = sliderCards.length - visibleCount; // Maximum index

  // Ensure the current index doesn't go out of bounds
  currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

  // Translate the slider
  if (isMobile) {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    slider.style.transition = "transform 0.5s ease-in-out";
  } else {
    slider.style.transform = `translateX(-${
      currentIndex * slideWidth * 1.045
    }px)`;
    slider.style.transition = "transform 0.5s ease-in-out";
  }

  // Adjust scaling for active and non-active cards
  sliderCards.forEach((card, index) => {
    if (!isMobile) {
      if (index === currentIndex + 1) {
        card.style.transform = "scale(1.1)"; // Scale active card
        card.style.transition = "transform 0.5s ease-in-out";
      } else {
        card.style.transform = "scale(0.9)"; // Scale other cards
        card.style.transition = "transform 0.5s ease-in-out";
      }
    }

    // Adjust visibility for mobile (hide all except the active card)
    if (isMobile) {
      card.style.opacity = index === currentIndex ? "1" : "0";
      card.style.pointerEvents = index === currentIndex ? "auto" : "none";
    } else {
      card.style.opacity = "1";
      card.style.pointerEvents = "auto";
    }
  });
}

// Handle left arrow click
leftButton.addEventListener("click", () => {
  currentIndex--;
  updateSlider();
});

// Handle right arrow click
rightButton.addEventListener("click", () => {
  currentIndex++;
  updateSlider();
});

// Update slider on window resize
window.addEventListener("resize", () => {
  updateSlider();
});

// Initialize slider
updateSlider();
