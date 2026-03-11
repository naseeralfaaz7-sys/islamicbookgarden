function addBook(){

let name=document.getElementById("bookName").value
let price=document.getElementById("bookPrice").value
let image=document.getElementById("bookImage").value

if(name=="" || price=="" || image==""){
alert("Enter all details")
return
}

let books=JSON.parse(localStorage.getItem("books")) || []

books.push({
name:name,
price:price,
image:image
})

localStorage.setItem("books",JSON.stringify(books))

document.getElementById("bookName").value=""
document.getElementById("bookPrice").value=""
document.getElementById("bookImage").value=""

loadBooks()

}

function loadBooks(){

let books=JSON.parse(localStorage.getItem("books")) || []

let list=document.getElementById("bookList")

list.innerHTML=""

books.forEach((book,index)=>{

list.innerHTML+=`

<div class="book">

<img src="${book.image}">

<span>${book.name} - Rs.${book.price}</span>

<button onclick="deleteBook(${index})">Delete</button>

</div>

`

})

}

function deleteBook(index){

let books=JSON.parse(localStorage.getItem("books"))

books.splice(index,1)

localStorage.setItem("books",JSON.stringify(books))

loadBooks()

}

loadBooks()

function sendRating(bookName,ratingId){

let rating = document.getElementById(ratingId).value

if(rating == ""){
alert("Please select rating")
return
}

let message = "Book Rating\n\nBook: " + bookName + "\nRating: " + rating

let phone = "94750144712"

let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message)

window.open(url)

}
function sendRating(bookName,ratingId){

let rating=document.getElementById(ratingId).value

if(rating==""){
alert("Please select rating")
return
}

let message="Book Rating\n\nBook: "+bookName+"\nRating: "+rating

let phone="94750144712"

let url="https://wa.me/"+phone+"?text="+encodeURIComponent(message)

window.open(url)

}