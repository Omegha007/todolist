let form = document.getElementById("form");
let username = document.getElementById("Username");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");

form.addEventListener("submit", (e) => {
  if(!validate()){
    e.preventDefault()
  }
  
});
function validate() {
  let userval = username.value.trim();
  let emailval = email.value.trim();
  let passval = pass.value.trim();
  let cpassval = cpass.value.trim();
  let win=true

  if (userval === "") {
    error(username, "username is Required");
    win=false;
  } else {
    success(username);
  }

  if (emailval === "") {
    error(email, "Email is Required");
    win=false;
  } else if (!setemail(emailval)) {
    error(email, "Please enter a Valid Email");
    win=false;
  } else {
    success(email);
  }

  if(passval===''){
    error(pass,"Password is required")
    win=false;
  }else if(passval.length<8){
    error(pass,'password must be atleast 8 characters long');
    win=false;
  }
  else {
    success(pass);
  }

  if(cpassval===''){
    error(cpass,"Confirm Password is required")
    win=false;
  }
  else if(cpassval!==passval){
    error(cpass,'Passwords do not match')
    win=false;
  }
  else {
    success(cpass);
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
  err.innerHTML = " ";
  intgrp.classList.add("success");
  intgrp.classList.remove("error");
}

function setemail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
}