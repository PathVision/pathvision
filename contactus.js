document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".main-nav");
  const dropdown = document.querySelector(".dropdown");
  const dropBtn = dropdown.querySelector(".dropbtn");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  dropBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("active");
  });

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove("active");
    }
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768 && !link.closest(".dropdown")) {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      dropdown.classList.remove("active");
    }
  });
});

document.getElementById('locationSelect').addEventListener('change', function () {
  const mapFrame = document.getElementById('mapFrame');

  const locations = {
    headquarter: "https://www.google.com/maps?q=Srinivasa+Nagar,+Proddatur,+Andhra+Pradesh+516360,+IN&output=embed",
    operating: "https://www.google.com/maps?q=GITAM+University,+Bengaluru,+Karnataka+561203,+IN&output=embed"
  };

  mapFrame.src = locations[this.value];
});
