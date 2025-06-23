document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav ul");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("active");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".main-nav");
  const dropdownBtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");
  const arrow = document.querySelector(".arrow");

  // Toggle mobile navigation
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Toggle dropdown for "Products/Solutions" on click for mobile
  dropdownBtn.addEventListener("click", function (event) {
    // Prevent default navigation if it's a link
    event.preventDefault();

    // Only toggle if on a mobile viewport (you might want to adjust the max-width)
    if (window.innerWidth <= 768) {
      dropdownContent.style.display =
        dropdownContent.style.display === "flex" ? "none" : "flex";
      arrow.style.transform =
        dropdownContent.style.display === "flex"
          ? "rotate(180deg)"
          : "rotate(0deg)";
    }
  });

  // Handle closing the mobile menu when a nav link is clicked
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768 && !link.closest(".dropdown")) {
        // Don't close if it's part of the dropdown itself
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });

  // Close mobile menu if window is resized above mobile breakpoint
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      // Ensure dropdown is hidden on desktop if it was open from mobile click
      dropdownContent.style.display = ""; // Reset to default CSS behavior
      arrow.style.transform = ""; // Reset arrow
    }
  });
});

// --- Feature and Mockup Flip Logic ---
const featureItems = document.querySelectorAll(".feature-item");
featureItems.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("flipped");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevArrow = document.querySelector(".carousel-arrow.prev");
  const nextArrow = document.querySelector(".carousel-arrow.next");

  let currentIndex = 0;
  const totalSlides = slides.length;
  let autoSlideInterval;

  const updateCarousel = () => {
    const offset = -currentIndex * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
  };

  const goToNextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  };

  const goToPrevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  };

  prevArrow.addEventListener("click", () => {
    goToPrevSlide();
    resetAutoSlide();
  });

  nextArrow.addEventListener("click", () => {
    goToNextSlide();
    resetAutoSlide();
  });

  const startAutoSlide = () => {
    autoSlideInterval = setInterval(goToNextSlide, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  const resetAutoSlide = () => {
    stopAutoSlide();
    startAutoSlide();
  };

  updateCarousel();
  startAutoSlide();
});
