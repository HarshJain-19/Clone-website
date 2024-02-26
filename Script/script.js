//* Scroll Effect
window.onscroll = e => {
  console.log(e); console.log(this.scrollY);
  this.scrollY==0
    ? document.querySelector("header").className="" 
    : document.querySelector("header").className="header-fixed";
}

//* Login Form
const login = () => document.querySelector(".login-container").classList.add("login-active");
document.querySelector(".login-container").onclick =  () => document.querySelector(".login-container").classList.remove("login-active");
document.querySelector("#login-form").onclick = () => event.stopPropagation();

