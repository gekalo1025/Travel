console.log('1.Соответствие верстки макету 390px:+48(небольшие отклонения в пределах 10 pixel)\n2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +15\nНа ширине экрана 390рх и меньше реализовано адаптивное меню:+22\nИтого:+75');

$(document).ready(function () {
   $('.header-burger').click(function (event) {
      $('.header-burger, .menu').toggleClass('active');
   });
   $('.menu a').click(function (event) {
      $('.header-burger, .menu').removeClass('active');
   });
   $('.main').click(function (event) {
      $('.header-burger, .menu').removeClass('active');
   });

   $('.image-close').click(function (event) {
      $('.header-burger, .menu').removeClass('active');
   });

});
if (window.innerWidth <= 390) {
   document.querySelector(".story-img-1").src = "./assets/img/story-1mobile.jpg";
   document.querySelector(".story-img-2").src = "./assets/img/story-2mobile.jpg";
   document.querySelector(".story-img-3").src = "./assets/img/story-3mobile.jpg";
   document.querySelector(".story-img-4").src = "./assets/img/story-4mobile.jpg";
 }
