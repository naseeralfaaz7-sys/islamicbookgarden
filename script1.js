document.addEventListener("DOMContentLoaded", function(){

updateTotal();
loadCart();
updateCartCount();

let checkoutBtn = document.getElementById("checkout");

if(checkoutBtn){

checkoutBtn.addEventListener("click", function(){

let rows=document.querySelectorAll("tbody tr");

if(rows.length===0){
alert("Your cart is empty");
return;
}

alert("Order placed successfully!");
localStorage.removeItem("cartData");
location.reload();

});

}

});

function addToCart(name,category,price){

let cart=JSON.parse(localStorage.getItem("cartData")) || [];

cart.push({
name:name,
category:category,
qty:1,
price:price
});

localStorage.setItem("cartData",JSON.stringify(cart));

alert("Book added to cart");

updateCartCount();

}

function updateCartCount(){

let cart=JSON.parse(localStorage.getItem("cartData")) || [];

let badge=document.getElementById("cart-count");

if(badge){
badge.innerText=cart.length;
}

}

function removeItem(btn){

let row=btn.parentNode.parentNode;

row.remove();

saveCart();

updateTotal();

updateCartCount();

}

function changeQty(input){

if(input.value<1){
input.value=1;
}

saveCart();

updateTotal();

}

function updateTotal(){

let rows=document.querySelectorAll("tbody tr");

let total=0;

rows.forEach(function(row){

let price=parseInt(row.children[3].innerText);

let qty=parseInt(row.children[2].children[0].value);

total+=price*qty;

});

let totalBox=document.getElementById("total");

if(totalBox){
totalBox.innerText="Total: Rs. "+total;
}

}

function saveCart(){

let rows=document.querySelectorAll("tbody tr");

let cart=[];

rows.forEach(function(row){

let name=row.children[0].innerText;

let category=row.children[1].innerText;

let qty=row.children[2].children[0].value;

let price=row.children[3].innerText;

cart.push({name,category,qty,price});

});

localStorage.setItem("cartData",JSON.stringify(cart));

}

function loadCart(){

let cart=JSON.parse(localStorage.getItem("cartData"));

if(!cart) return;

let tbody=document.querySelector("tbody");

if(!tbody) return;

tbody.innerHTML="";

cart.forEach(function(item){

let row=document.createElement("tr");

row.innerHTML=`
<td>${item.name}</td>
<td>${item.category}</td>
<td><input type="number" value="${item.qty}" min="1" onchange="changeQty(this)"></td>
<td>${item.price}</td>
<td><button onclick="removeItem(this)">Remove</button></td>
`;

tbody.appendChild(row);

});

updateTotal();

}

function sendOrder(){

let name=document.getElementById("name").value;
let phone=document.getElementById("phone").value;
let location=document.getElementById("location").value;

if(name=="" || phone=="" || location==""){
alert("Please fill all details");
return;
}

let rows=document.querySelectorAll("tbody tr");

if(rows.length===0){
alert("Cart is empty");
return;
}

let order="";

rows.forEach(function(row){

let book=row.children[0].innerText;
let qty=row.children[2].children[0].value;

order += book+" (Qty:"+qty+") %0A";

});

let total=document.getElementById("total").innerText;

let message=
"NEW BOOK ORDER %0A%0A"+
"Name: "+name+" %0A"+
"Phone: "+phone+" %0A"+
"Location: "+location+" %0A%0A"+
"Order Details:%0A"+
order+
"%0A"+total;

window.open("https://api.whatsapp.com/send?phone=94755209926&text="+message);

}