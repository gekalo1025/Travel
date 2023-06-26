import backDesktopSlider from "./js/backDesktopSlider";
import loginPopup from "./js/loginPopup";
import MobileSlider from "./js/mobileSlider";
import nextDesktopSlider from "./js/nextDesktopSlider";
import toggleBurger from "./js/toggleBurger";
import toggleRegisterPopup from "./js/toggleRegisterPopup";

const registerLink = document.querySelector(".popup__linkRegister>a");
const nextImg = document.querySelector(".arrow-sliyder-rigth");
const backImg = document.querySelector(".arrow-sliyder-left");
const images = document.querySelectorAll(".distination-carousel .img-mobile");
const dots = document.querySelectorAll(".dot");

const centerActive = document.querySelector(".img-carousel-2");
const next = document.querySelector(".img-carousel-3");
const back = document.querySelector(".img-carousel-1");

const mobSlider = new MobileSlider(images, dots);

window.addEventListener("load", function () {
  if (window.innerWidth <= 390) {
    document.querySelector(".story-img-1").src = "./src/assets/img/story-1mobile.jpg";
    document.querySelector(".story-img-2").src = "./src/assets/img/story-2mobile.jpg";
    document.querySelector(".story-img-3").src = "./src/assets/img/story-3mobile.jpg";
    document.querySelector(".story-img-4").src = "./src/assets/img/story-4mobile.jpg";
  }

  document.addEventListener("click", (event) => {
    loginPopup(event);
    toggleBurger(event);
  });

  registerLink.addEventListener("click", toggleRegisterPopup);
  mobSlider.isActive();
  backImg.onclick = mobSlider.prevSlide;
  nextImg.onclick = mobSlider.nextSlide;

  if (window.innerWidth >= 1439) {
    dots[0].classList.remove("active");
    dots[1].classList.add("active");

    centerActive.classList.add("active");

    back.onclick = backDesktopSlider;
    next.onclick = nextDesktopSlider;
  }
});
