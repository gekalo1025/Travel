export default function toggleBurger(event) {
  if (event.target.closest(".header-burger")) {
    document.querySelector(".menu").classList.toggle("active");
  }
  if (event.target.closest(".menu a")) {
    document.querySelector(" .menu").classList.remove("active");
  }
  if (event.target.closest(".image-close")) {
    document.querySelector(".menu").classList.remove("active");
  }
}
