// Modal layout
var modal = document.querySelector(".modal");
var close = document.querySelector(".modal__overlay");

var signUpBtn = document.getElementById("sign-up-btn");
var logInBtn = document.getElementById("log-in-btn");

var switchToSignUpBtn = document.getElementById("switch-to-sign-up-btn");
var switchToLogInBtn = document.getElementById("switch-to-log-in-btn");

var signUpForm = document.getElementById("sign-up-form");
var logInForm = document.getElementById("log-in-form");

var returnBtn = document.querySelectorAll(".auth__ctrl-back");
 
signUpBtn.onclick = function() {
  modal.style.display = "flex";
  signUpForm.style.display = "block";
  logInForm.style.display = "none";
}

logInBtn.onclick = function() {
  modal.style.display = "flex";
  signUpForm.style.display = "none";
  logInForm.style.display = "block";
}

switchToSignUpBtn.onclick = function() {
  signUpForm.style.display = "block";
  logInForm.style.display = "none";
}

switchToLogInBtn.onclick = function() {
  signUpForm.style.display = "none";
  logInForm.style.display = "block";
}

returnBtn[0].onclick = function() {
  modal.style.display = "none";
}

returnBtn[1].onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
close.onclick = function(event) {
  if (event.target == close) {
    modal.style.display = "none";
  }
}

