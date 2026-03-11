<script>

function loadBooks(){

let books = JSON.parse(localStorage.getItem("books")) || []

let container = document.getElementById("bookContainer")

container.innerHTML = ""

books.forEach(book => {

container.innerHTML += `

<div class="book-card">

<img src="${book.image}" width="120">

<h3>${book.name}</h3>

<p>Rs.${book.price}</p>

<button onclick="addToCart('${book.name}', ${book.price})">
Add to Cart
</button>

</div>

`

})

}

loadBooks()

</script>