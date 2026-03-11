document.addEventListener("DOMContentLoaded", function () {

let usernameInput = document.querySelector('input[type="text"]');
let passwordInput = document.querySelector('input[type="password"]');
let loginButton = document.querySelector("button");
let rememberCheck = document.querySelector('input[type="checkbox"]');

let attempts = 0;

// Load saved username
if(localStorage.getItem("savedUser")){
usernameInput.value = localStorage.getItem("savedUser");
rememberCheck.checked = true;
}

loginButton.addEventListener("click", function(){

let username = usernameInput.value.trim();
let password = passwordInput.value.trim();

// Empty check
if(username === "" || password === ""){
alert("Please fill all fields");
return;
}

// Login check
if(username === "admin" && password === "1234"){

alert("Login Successful!");

// Remember username
if(rememberCheck.checked){
localStorage.setItem("savedUser", username);
}else{
localStorage.removeItem("savedUser");
}

// Redirect
window.location.href = "home.html";

}else{

attempts++;

if(attempts >= 3){
alert("Too many wrong attempts! Login locked.");
loginButton.disabled = true;
}else{
alert("Invalid Username or Password");
}

}

});

// Show / Hide password
passwordInput.addEventListener("dblclick", function(){

if(passwordInput.type === "password"){
passwordInput.type = "text";
}else{
passwordInput.type = "password";
}

});

});