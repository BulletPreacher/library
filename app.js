function CreateBook(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
  };
}

const theHobbit = new CreateBook(
  "The Hobbit",
  "J.R.R. Tolkien",
  "295 pages",
  "not read yet"
);

console.log(theHobbit.info());

let myLibrary = [];

function addBookToLibrary(event) {
  event.preventDefault();
  //when form submitted
  var nameValue = document.getElementById("book_name").value;
  var authorValue = document.getElementById("book_author").value;
  var pagesValue = document.getElementById("book_pages").value;
  let book = new Book(nameValue, authorValue, pagesValue);
  myLibrary.push(book);
  console.log(myLibrary);
  var x = document.getElementById("formCon");
  x.classList.add("hide");
}

function Book(name, author, pages) {
  //this will be called in add book
  // the constructor...
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = "false";
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

function toggleRead() {
  var x = document.getElementById("formCon");
}

function change(e) {
  if (e.checked === true) {
    while (e.parentNode.className.toLowerCase() !== "card") {
      e = e.parentNode;
      f= e.parentNode;   
    }
    console.log(e);
    f.style.backgroundColor = "#7cd217";
  }else if(e.checked === false){
    f.style.backgroundColor = "#53299f";
  }
}

let btn = document.getElementById("btnSubmit");
btn.addEventListener("click", addBookToLibrary);
