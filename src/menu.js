const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");
const sec = document.getElementById("menu-sec");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("close");
const body = document.body;

// Toggle menu visibility and prevent scrolling

menuIcon.addEventListener("click", () => {
  menu.classList.remove("hidden");
  sec.classList.remove("h-[126.67vw]");
  sec.classList.add("h-screen")
  body.classList.add("overflow-hidden");

});

// Close the menu and enable scrolling
closeBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
  sec.classList.add("h-[126.67vw]");
  sec.classList.remove("h-screen")
  body.classList.remove("overflow-hidden");
});

function menuActive() {
    const currentPath = window.location.pathname; // Get current page path (e.g., "/index.html")
    const menuItems = document.querySelectorAll(".menu-item");
  
    menuItems.forEach((item) => {
      const link = item.querySelector("a");
      const leftLine = item.querySelector(".line-left");
      const rightLine = item.querySelector(".line-right");
      console.log(link.getAttribute("href"));
      console.log(currentPath);
  
      // Check if the link's href matches the current page path
      if ("/"+link.getAttribute("href") == currentPath) {
        // Add active text color and font weight
        link.classList.add("text-01", "font-[700]");
        console.log("true");
        
  
        // Make the gradient lines visible
        leftLine.classList.remove("opacity-0");
        rightLine.classList.remove("opacity-0");
      }
    });
  }
  
  menuActive();
  