export default function toggleRegisterPopup() {
  const registerLink = document.querySelector(".popup__linkRegister>a");
  registerLink.classList.toggle("register");
  if (registerLink.classList.contains("register")) {
    document.querySelector(".popup__Social-media-login").style.display = "none";
    document.querySelector(".popup__linkForgetPassword").style.display = "none";
    document.querySelector(".popup__Title").innerHTML = "Create account";
    document.querySelector(".popup__Button").innerHTML = "Sign up";
    document.querySelector(".popup__linkRegister>span").innerHTML = "Already have an account?";
    document.querySelector(".popup__linkRegister > a").innerHTML = "Log in";
  } else {
    document.querySelector(".popup__Social-media-login").style.display = "";
    document.querySelector(".popup__linkForgetPassword").style.display = "";
    document.querySelector(".popup__Title").innerHTML = "Log in to your account";
    document.querySelector(".popup__Button").innerHTML = "Sign in";
    document.querySelector(".popup__linkRegister>span").innerHTML = "Don’t have an account?";
    document.querySelector(".popup__linkRegister > a").innerHTML = "Register";
  }
}
