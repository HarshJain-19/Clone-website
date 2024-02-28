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
//* Remove Login Form
document.querySelector(".login-container").onclick =  () => {
  document.querySelector(".login-container").classList.remove("login-active");
  document.getElementById("invalidEmail").innerText="";
  document.getElementById("invalidPassword").innerText="";
};
document.querySelector("#login-form").onclick = () => event.stopPropagation();

//^ Email Validation
const isValidEmail = x => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x);
const checkEmail = e => {
  !isValidEmail(e)
    ? document.getElementById("invalidEmail").innerText="Invalid Email"
    : document.getElementById("invalidEmail").innerText="";
};
document.getElementById("email").onblur = e => checkEmail(e.target.value);
//^ Password Validation
const isValidPassWord = x => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#&]).{8,15}$/.test(x);
const checkPassword = e => {
  isValidPassWord(e)
    ? document.getElementById("invalidPassword").innerText=""
    : document.getElementById("invalidPassword").innerText="Invalid Password";
};
document.getElementById("password").onblur = e => checkPassword(e.target.value);


//* Submit Form
const submitForm = () => {
  event.preventDefault();
  if (!isValidEmail(document.getElementById("email").value)) {
    window.alert("Email is not valid...\nplease enter a valid email");
    return false;
  } else if (!isValidPassWord(document.getElementById("password").value)) {
    window.alert("Password is valid please...\nenter a password 8-15 characters and it must includes atleast single a-z, A-Z, 0-9, special characters (!@#&)");
    return false;
  }
  console.log("Your Email Id: %s and password: %s",event.target.elements["email"].value, event.target.elements["password"].value);
  document.querySelector(".login-container").classList.remove("login-active");
}

