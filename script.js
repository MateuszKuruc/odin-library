"use strict";

// const bookList = document.getElementById('bookList');

// const bookElement = document.createElement('div');
// const title = document.createElement('h3');
// const author = document.createElement('h3');
// const pages = document.createElement('h3');
// const bookCard = document.querySelector('.bookCard');
const submitBook = document.querySelector('#submitBook');
submitBook.addEventListener('click', function(event) {
    event.preventDefault();
alert('sadsad');
titleData = document.querySelector('#title').value;
authorData = document.querySelector('#author').value;
pagesData = document.querySelector('#pages').value;
readData = document.querySelector('#read').value;
singleBook = new Book(titleData, authorData, pagesData, readData);
myLibrary.push(singleBook);
displayBook();
myLibrary = [];
});

let titleData;
let authorData;
let pagesData;
let readData;
let newBook = [];
let singleBook;


// const book1 = new Book("Dumb", "Dumbinho", 237, "Read");
// const book2 = new Book("Fuckity", "Fuck", 450, "Not read yet");
// const book3 = new Book('Shitty', 'Big Shit', 666, 'Read');
// const book4 = new Book('Retarded', 'Sir Retard Retardson', 123, 'Not read yet');
// const book5 = new Book('Pameliada', "Penelopa Kokot", 333, 'Not read yet');
// console.log(book1.info());

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// function addBookToLibrary(newBook) {

//     myLibrary.push(newBook);
// };

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);
// addBookToLibrary(book4);
// addBookToLibrary(book5);


function displayBook() {
for (let i = 0; i < myLibrary.length; i++) {
    let newBook = myLibrary[i];
const bookElement = document.createElement('div');
const title = document.createElement('h3');
const author = document.createElement('h3');
const pages = document.createElement('h3');
const readButton = document.createElement('button');
const deleteButton = document.createElement('button');
bookElement.classList.add('bookCard');
title.innerHTML = '"' + newBook.title + '"';
author.innerHTML = newBook.author;
pages.innerHTML = newBook.pages;
readButton.innerHTML = newBook.read;
deleteButton.innerHTML = 'Remove book'
bookList.appendChild(bookElement);
bookElement.appendChild(title);
bookElement.appendChild(author);
bookElement.appendChild(pages);
bookElement.appendChild(readButton);
bookElement.appendChild(deleteButton)
}
};


// displayBook();
