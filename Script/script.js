//* Scroll Effect
window.onscroll = e => {
  console.log(e); console.log(this.scrollY);
  this.scrollY==0
    ? document.querySelector("header").className="" 
    : document.querySelector("header").className="header-fixed";
}

//* Login Form
const login = () => {
  document.querySelector(".login-container").classList.add("login-active");
  document.querySelector("[name=email]").value="";
  document.querySelector("[name=password]").value="";
};
document.querySelector(".login-container").onclick =  () => document.querySelector(".login-container").classList.remove("login-active");
document.querySelector("#login-form").onclick = () => event.stopPropagation();

//* Submit Form
const submitForm = () => {
  event.preventDefault();
  console.log("Your Email Id: %s and password: %s",event.target.elements["email"].value, event.target.elements["password"].value);
  document.querySelector(".login-container").classList.remove("login-active");
}
const isValidEmail = x => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x);
document.getElementById("email").oninput = e => {
  if (!isValidEmail(e.target.value)) 
    document.getElementById("invalid").innerText="Invalid Email";
  else 
  document.getElementById("invalid").innerText="";
}


