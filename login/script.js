let form = document.getElementById("form");
let user = document.getElementById("username");
let pass = document.getElementById("pass");

form.addEventListener("submit", (e) => {
  if (!validate()) {
    e.preventDefault();
  }
  
});

function validate() {
  let userval = user.value.trim();
  let passval = pass.value.trim();
  let win = true;
  if (userval === "") {
    error(user, "Username is required");
    win = false;
  } else {
    success(user);
  }
  if (passval === "") {
    error(pass, "Password is required");
    win = false;
  } else if (passval.length < 8) {
    win = false;
    error(pass, "password should be at least 8 characters long");
  } else {
    success(pass);
  }
  return win;
}

function error(element, msg) {
  let intgrp = element.parentElement;
  let err = intgrp.querySelector(".error");
  err.innerHTML = msg;
  intgrp.classList.add("error");
  intgrp.classList.remove("success");
}
function success(element) {
  let intgrp = element.parentElement;
  let err = intgrp.querySelector(".error");
  err.innerHTML = "";
  intgrp.classList.add("success");
  intgrp.classList.remove("error");
}