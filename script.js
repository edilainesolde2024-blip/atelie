// MENU MOBILE
const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
  alert("Menu mobile em desenvolvimento 🚀");
});

// BOTÃO SHOP
const shopBtn = document.querySelector(".shop");

shopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
});

// HEADER DINÂMICO
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.background = "#ffffffdd";
    header.style.backdropFilter = "blur(10px)";
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";

  } else {

    header.style.background = "#4A40E014";
    header.style.boxShadow = "none";

  }

});

// ANIMAÇÃO NOS CARDS
const cards = document.querySelectorAll(".cardstyle");

cards.forEach((card) => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-8px)";
    card.style.transition = "0.3s";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0px)";

  });

});