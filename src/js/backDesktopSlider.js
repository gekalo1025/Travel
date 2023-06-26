export default function backDesktopSlider() {
  const dots = document.querySelectorAll(".dot");
  const imageDesktop = document.querySelectorAll(".img-desktop");
  const centerActive = document.querySelector(".img-carousel-2");
  for (let key of imageDesktop) {
    let keySrc = () => (key.src = `./src/assets/img/Destination-${indexSrc}.jpg`);
    let keyClassRemove = () => key.classList.remove("active");
    let indexSrc = key.getAttribute("src")[29];
    if (indexSrc == 1) {
      indexSrc = imageDesktop.length;
      key.classList.add("active");
      setTimeout(keyClassRemove, 600);
      setTimeout(keySrc, 700);
    } else {
      indexSrc--;
      key.classList.add("active");
      setTimeout(keyClassRemove, 600);
      setTimeout(keySrc, 700);
    }

    if (centerActive && indexSrc === 3) {
      dots[1].classList.add("active");
    } else {
      dots[1].classList.remove("active");
    }
    if (centerActive && indexSrc === 1) {
      dots[2].classList.add("active");
    } else {
      dots[2].classList.remove("active");
    }
    if (centerActive && indexSrc === 2) {
      dots[0].classList.add("active");
    } else {
      dots[0].classList.remove("active");
    }
  }
}
