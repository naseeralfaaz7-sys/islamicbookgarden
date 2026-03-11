function sendMessage(){

let name=document.getElementById("name").value.trim();
let email=document.getElementById("email").value.trim();
let message=document.getElementById("message").value.trim();

let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(name===""){
alert("Please enter your name");
return;
}

if(email===""){
alert("Please enter your email");
return;
}

if(!email.match(emailPattern)){
alert("Enter a valid email address");
return;
}

if(message===""){
alert("Please write your message");
return;
}

let text=
"CONTACT MESSAGE %0A%0A"+
"Name: "+name+" %0A"+
"Email: "+email+" %0A"+
"Message: "+message;

window.open("https://api.whatsapp.com/send?phone=94750144712&text="+text);

document.getElementById("contactForm").reset();

}