  document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".main-nav");
  const dropdown = document.querySelector(".dropdown");
  const dropBtn = dropdown.querySelector(".dropbtn");

  // Toggle mobile nav
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Toggle dropdown on click
  dropBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent bubbling
    dropdown.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });

  // Close mobile nav when a normal link is clicked (not dropdown)
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768 && !link.closest(".dropdown")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });

  // Reset on resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      dropdown.classList.remove("active");
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