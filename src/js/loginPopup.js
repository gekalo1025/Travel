export default function loginPopup(event) {
  const popup = document.querySelector(".popup");
  if (event.target.closest(".login , .menu-account, .popup .image-close")) {
    popup.classList.toggle("active");
  }
  if (!event.target.closest(".popup, .login, .menu-account")) {
    popup.classList.remove("active");
  }
}
