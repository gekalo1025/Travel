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
       if(event.target.closest('.login')){
           popup.classList.toggle('active');
       }
       if(!event.target.closest('.popup, .login')){
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
   ///////////Карусель в секции distinations/////////////
   let images = document.querySelectorAll('.distination-carousel img');
   let nextImg = document.querySelector('.img-carousel-3');
   let backImg = document.querySelector('.img-carousel-1');
   
   let next = function(){
       let i = 0; 
       let x = 1;
       let y = 2;
       let z = 0;
   if(x>2){
       x=0
   }else if(i>2){
       i=0
   }
   if(y>2){
       y=0
   }
       document.querySelector('.img-carousel-1').style.order = x+z ;
       document.querySelector('.img-carousel-2').style.order = y+z ;
       document.querySelector('.img-carousel-3').style.order = i+z ;
       console.log(z)
       
   }
   let back = function(){
   let i=0;
       if(i >= images.length){
           i = 0; 
       }
       document.querySelector('.img-carousel-2').style.order = i;
       document.querySelector('.img-carousel-1').style.order = i+3;
       i=i+1;
       console.log(i)
   }
   
   backImg.onclick = back;
   nextImg.onclick = next;
   
   
   
   
   });
