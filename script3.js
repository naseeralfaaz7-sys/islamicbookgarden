function searchBooks(){

let input=document.getElementById("searchBox").value.toLowerCase();

let rows=document.querySelectorAll("table tr");

rows.forEach(function(row,index){

if(index===0) return;

let text=row.innerText.toLowerCase();

if(text.includes(input)){
row.style.display="";
}else{
row.style.display="none";
}

});

}