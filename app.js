let myLibrary = [];
let htmlCode = ``;
const Cards = document.querySelector(".card-area");
let btn = document.getElementById("btnSubmit");
btn.addEventListener("click", addBookToLibrary);
var index;

function addBookToLibrary(event) {
  event.preventDefault();
  //when form submitted
  if (myLibrary.length == 0) {
    index = 0;
  } else {
    index = myLibrary.length - 1;
    var lastElement = myLibrary[index].index;
    index = lastElement + 1;
  }
  var nameValue = document.getElementById("book_name").value;
  var authorValue = document.getElementById("book_author").value;
  var pagesValue = document.getElementById("book_pages").value;
  console.log(index);
  let book = new Book(nameValue, authorValue, pagesValue, index);
  myLibrary.push(book);
  console.log(myLibrary);
  var x = document.getElementById("formCon");
  x.classList.add("hide");
  htmlCode = `
  <div class="card" data-attribute=${index}>
    <h3>${nameValue}</h3>
    <h5>by ${authorValue}</h5>
    <h5>${pagesValue} Pages</h5>
    <label class="switch">
      <input type="checkbox" onclick="change(event)"/>
      <span class="slider round"></span>
    </label>
    <input type="button" value="Remove" onclick="remove(event)" />
  </div>
  `;

  Cards.innerHTML += htmlCode;
}

function Book(name, author, pages, index) {
  //this will be called in add book
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = "false";
  this.index = index;
}

function showAdd() {
  var x = document.getElementById("formCon");
  document.getElementById("book_name").value = "";
  document.getElementById("book_author").value = "";
  document.getElementById("book_pages").value = "";
  if (x.classList.contains("hide")) {
    x.classList.remove("hide");
  } else {
    x.classList.add("hide");
  }
}

function change(e) {
  var f;
  var g;
  f = e.target.parentNode.parentNode;
  g = f.getAttribute("data-attribute");
  var h = myLibrary.findIndex((item) => item.index == g);
  if (myLibrary[h].read == true) {
    myLibrary[h].read = false;
    e.target.classList.remove("checked");
    f.style.backgroundColor = "#53299f";
  } else {
    myLibrary[h].read = true;
    e.target.classList.add("checked");
    f.style.backgroundColor = "#7cd217";
  }
}

function remove(e) {
  var f;
  var g;
  f = e.target.parentNode;
  g = f.getAttribute("data-attribute");
  var h = myLibrary.findIndex((item) => item.index == g);
  myLibrary.splice(h, 1);
  f = e.target.parentNode;
  f.remove();
  console.log(myLibrary);
}

function clearLibrary() {
  myLibrary.length = 0;
  Cards.innerHTML = "";
}
