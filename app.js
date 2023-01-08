let myLibrary = [];
let htmlCode = ``;
const Cards = document.querySelector(".card-area");
let btn = document.getElementById("btnSubmit");
btn.addEventListener("click", validateData);
var index;

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

function validateData(event) {
  var nameValue = document.getElementById("book_name").value;
  var authorValue = document.getElementById("book_author").value;
  var pagesValue = document.getElementById("book_pages").value;
  if (nameValue !== "" && authorValue !== "" && pagesValue.length!==0) {
    addBookToLibrary(event);
  }
}

function addBookToLibrary(event) {
  //when form submitted
  event.preventDefault();
  if (myLibrary.length == 0) {
    index = 0;
  } else {
    index = myLibrary.length - 1;
    var lastElement = myLibrary[index].index;
    index = lastElement + 1;
  }
  nameValue = document.getElementById("book_name").value;
  authorValue = document.getElementById("book_author").value;
  pagesValue = document.getElementById("book_pages").value;
  let book = new Book(nameValue, authorValue, pagesValue, index);
  myLibrary.push(book);
  var x = document.getElementById("formCon");
  x.classList.add("hide");
  htmlCode = `
  <div class="card" data-attribute=${index}>
    <div class="bookbox">
      <div class="bookdetails">
      <h3>${nameValue}</h3>
      <h5 id="authorText">By ${authorValue}</h5>
      </div>
      <h5 id="pageText">${pagesValue} Pages</h5>
    </div>
    <div class="switchbox">
      <label class="switch">
        <input type="checkbox" onclick="setRead(event)"/>
        <span class="slider round"></span>
      </label>
    </div>
    <input type="button" value="Remove" onclick="remove(event)" />
  </div>
  `;
  Cards.innerHTML += htmlCode;
  updateStats();
}

function Book(name, author, pages, index) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = false;
  this.index = index;
}

function setRead(e) {
  var f;
  var g;
  f = e.target.parentNode.parentNode.parentNode;
  g = f.getAttribute("data-attribute");
  var h = myLibrary.findIndex((item) => item.index == g);
  if (myLibrary[h].read == true) {
    myLibrary[h].read = false;
    e.target.classList.remove("checked");
    f.style.backgroundColor = "";
  } else {
    myLibrary[h].read = true;
    e.target.classList.add("checked");
    f.style.backgroundColor = "#ffeb3bd4";
    f.style.boxShadow = "#ffeb3bd4";
  }
  updateStats();
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
  updateStats();
}

function clearLibrary() {
  myLibrary.length = 0;
  Cards.innerHTML = "";
  updateStats();
}

function updateStats() {
  var totalBooks = myLibrary.length;
  var totalRead = myLibrary.filter((obj) => obj.read === true).length;
  var totalUnread = totalBooks - totalRead;
  document.getElementById("totalBooks").innerText = totalBooks;
  document.getElementById("totalRead").innerText = totalRead;
  document.getElementById("totalUnread").innerText = totalUnread;
}
