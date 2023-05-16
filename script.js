"use strict";

const formBlock = document.querySelector(".form-block");
const addBookBtn = document.querySelector(".addBookBtn");
const submitBook = document.querySelector("#submitBook");
let titleData;
let authorData;
let pagesData;
let readData;
let newBook = [];
let singleBook;
let myLibrary = [];
const titleError = document.querySelector("#titleError");
const authorError = document.querySelector("#authorError");
const pagesError = document.querySelector("#pagesError");

// open the form

addBookBtn.addEventListener("click", function () {
  document.querySelector("#myForm").reset();
  formBlock.classList.remove("hidden");
});

// hide the form when user clicks outside it

document.addEventListener("click", function clickOutside(event) {
  if (!formBlock.contains(event.target) && !addBookBtn.contains(event.target)) {
    formBlock.classList.add("hidden");
    document.querySelector("#myForm").reset();
  }
});

submitBook.addEventListener("click", function addToLibrary(event) {
  event.preventDefault();

  titleData = document.querySelector("#title").value;
  authorData = document.querySelector("#author").value;
  pagesData = document.querySelector("#pages").value;
  readData = document.querySelector("#read").value;
  singleBook = new Book(titleData, authorData, pagesData, readData);
  if (singleBook.title === "") {
    titleError.classList.remove("hidden");
  }
  if (singleBook.author === "") {
    authorError.classList.remove("hidden");
  }
  if (singleBook.pages === "" || isNaN(singleBook.pages)) {
    pagesError.classList.remove("hidden");
    return;
  } else {
    myLibrary.push(singleBook);
    displayBook();
    formBlock.classList.add("hidden");
    document.querySelector("#myForm").reset();
    titleError.classList.add("hidden");
    authorError.classList.add("hidden");
    pagesError.classList.add("hidden");
  }
});

// object constructor

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function displayBook() {
  for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
    let newBook = myLibrary[i];
    const bookElement = document.createElement("div");
    const title = document.createElement("h3");
    const author = document.createElement("h3");
    const pages = document.createElement("h3");
    const readButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    bookElement.classList.add("bookCard");
    readButton.classList.add("readStyle");
    title.innerHTML = '"' + newBook.title + '"';
    author.innerHTML = newBook.author;
    pages.innerHTML = newBook.pages;
    if (newBook.read === "yes") {
      readButton.innerHTML = "Already read";
      readButton.classList.add("read");
    } else if (newBook.read === "no") {
      readButton.innerHTML = "Not read yet";
    }
    deleteButton.innerHTML = "Remove book";
    bookList.appendChild(bookElement);
    bookElement.appendChild(title);
    bookElement.appendChild(author);
    bookElement.appendChild(pages);
    bookElement.appendChild(readButton);
    bookElement.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      bookElement.style.display = "none";
      delete myLibrary[i];
    });
    readButton.addEventListener("click", () => {
      if (readButton.innerHTML === "Already read") {
        readButton.innerHTML = "Not read yet";
      } else if (readButton.innerHTML === "Not read yet") {
        readButton.innerHTML = "Already read";
      }
      readButton.classList.toggle("read");
    });
  }
}
