export default class MobileSlider {
  constructor(images, dots) {
    this.images = images;
    this.dots = dots;
    this.index = 0;
  }

  isActive() {
    if (!this.images[0].classList.contains("active")) {
      this.images[0].classList.add("active");
      this.dots[0].classList.add("active");
    }
  }
  activeSlide = (n) => {
    for (const slide of this.images) {
      slide.classList.remove("active");
    }
    this.images[n].classList.add("active");
  };
  activeDots = (n) => {
    for (const dot of this.dots) {
      dot.classList.remove("active");
    }
    this.dots[n].classList.add("active");
  };
  nextSlide = () => {
    if (this.index == this.images.length - 1) {
      this.index = 0;
      this.activeSlide(this.index);
      this.activeDots(this.index);
    } else {
      this.index++;
      this.activeSlide(this.index);
      this.activeDots(this.index);
    }
  };
  prevSlide = () => {
    if (this.index == 0) {
      this.index = this.images.length - 1;
      this.activeSlide(this.index);
      this.activeDots(this.index);
    } else {
      this.index--;
      this.activeSlide(this.index);
      this.activeDots(this.index);
    }
  };
}
