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

window.addEventListener("load", function() {

   const popupButton = document.querySelector('.popup__Button');
   const buttonLogin = document.querySelector('.login');
   const popup = document.querySelector('.popup');
   const registerLink = document.querySelector('.popup__linkRegister>a');
   const mediaLogin = document.querySelector('popup__Social-media-login');
   const wrapper = document.querySelector('.wrapper');
   
    document.addEventListener("click",loginPopup )//событие клик на весь документ и выполнение функции loginPopup
     //функция loginPopup = открытие по кнопку логин и закрытие при нажатии вне окна popup
    function loginPopup(event){
       if(event.target.closest('.login , .menu-account, .popup .image-close')){
           popup.classList.toggle('active');
       }
       if(!event.target.closest('.popup, .login, .menu-account')){
           popup.classList.remove('active');
       }
   
   
   }
   //вывод  Эмаила и Пароля пользователя (значения берутся из input)
   popupButton.addEventListener("click",function(event){
   let inputEmail = document.getElementById('myEmail').value;
   let inputPassword = document.getElementById('myPassword').value;
   alert(`You email: ${inputEmail}\nYou password: ${inputPassword}`);
   });
   
   // замена стилей и текста при нажатии на ссылку Register
   registerLink.addEventListener("click",function(event){
       registerLink.classList.toggle('register');
       if(registerLink.classList.contains('register')){
           document.querySelector('.popup__Social-media-login').style.display = "none";
           document.querySelector('.popup__linkForgetPassword').style.display = "none";
           document.querySelector('.popup__Title').innerHTML = "Create account";
           document.querySelector('.popup__Button').innerHTML = "Sign up";
           document.querySelector('.popup__linkRegister>span').innerHTML = "Already have an account?";
           document.querySelector('.popup__linkRegister > a').innerHTML = "Log in";
       
       }
       else{
           document.querySelector('.popup__Social-media-login').style.display = "";
           document.querySelector('.popup__linkForgetPassword').style.display = "";
           document.querySelector('.popup__Title').innerHTML = "Log in to your account";
           document.querySelector('.popup__Button').innerHTML = "Sign in";
           document.querySelector('.popup__linkRegister>span').innerHTML = "Don’t have an account?";
           document.querySelector('.popup__linkRegister > a').innerHTML = "Register";
   
       }
   
   });
   ///////////Карусель в секции distinations mobile/////////////

   let images = document.querySelectorAll('.distination-carousel .img-mobile');
   let nextImg = document.querySelector('.arrow-sliyder-rigth');
   let dots = document.querySelectorAll('.dot');
   let backImg = document.querySelector('.arrow-sliyder-left');
   let index = 0;
   //проверка есть ли на первом слайде класс актив,если нет то добавить.Функция нужна,чтобы задать первый текущий слайд
   if(!images[0].classList.contains('active')){
      images[0].classList.add('active');
      dots[0].classList.add('active');

   }
   // активный слайд. Удаляет класс актив со всех слайдов и назначает класс актив текущему
   const activSlide = n => {
    for(slide of images){
      slide.classList.remove('active');
    }
    images[n].classList.add('active');
   }
   // активная точка. Удаляет класс актив со всех точек и назначает класс актив текущей
   const activDots = n => {
    for(dot of dots){
      dot.classList.remove('active');
    }
    dots[n].classList.add('active');
   }

   const nextSlide = () =>{    
  if(index == images.length-1){
   index= 0 ;
   activSlide(index);
   activDots(index);
  }else{
   index++;
   activSlide(index);
   activDots(index);
  }
}
   const prevSlide = () =>{    
  if(index == 0){
   index= images.length-1 ;
   activSlide(index);
   activDots(index);
  }else{
   index--;
   activSlide(index);
   activDots(index);
  }
   }
   backImg.onclick = prevSlide;
   nextImg.onclick =nextSlide;
   

   ////Карусель desktop//
   // let imageDesktop = document.querySelectorAll('.distination-carousel .img-desktop');
   // let next = document.querySelector('.img-carousel-3');
   // let back = document.querySelector('.img-carousel-1');
   // let activOrder = 1;
   //  function next(){


   //  }
   });
