const slider = document.getElementById("testimonial-slider");
const testimonials = document.querySelectorAll(".testimonial-item");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

function updateSlider() {
  // Calculate translateX value
  const translateValue = currentIndex * -100;
  slider.style.transform = `translateX(${translateValue}%)`;

  // Reset all testimonials to normal size
  testimonials.forEach((testimonial, index) => {
    if (index === currentIndex) {
      testimonial.classList.add("scale-100");
      testimonial.classList.remove("scale-95");
    } else {
      testimonial.classList.remove("scale-100");
      testimonial.classList.add("scale-95");
    }
  });
}

// Button Listeners
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateSlider();
});

// Initialize slider
updateSlider();
