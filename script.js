"use strict";

// const bookList = document.getElementById('bookList');

// const bookElement = document.createElement('div');
// const title = document.createElement('h3');
// const author = document.createElement('h3');
// const pages = document.createElement('h3');
// const bookCard = document.querySelector('.bookCard');


const book1 = new Book("Dumb", "Dumbinho", 237, "Read");
const book2 = new Book("Fuckity", "Fuck", 450, "Not read yet");
const book3 = new Book('Shitty', 'Big Shit', 666, 'Read');
const book4 = new Book('Retarded', 'Sir Retard Retardson', 123, 'Not read yet');
// console.log(book1.info());

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
};

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);


function displayBook() {
for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
const bookElement = document.createElement('div');
const title = document.createElement('h3');
const author = document.createElement('h3');
const pages = document.createElement('h3');
const readButton = document.createElement('button');
const deleteButton = document.createElement('button');
bookElement.classList.add('bookCard');
title.innerHTML = '"' + book.title + '"';
author.innerHTML = book.author;
pages.innerHTML = book.pages;
readButton.innerHTML = book.read;
deleteButton.innerHTML = 'Remove book'
bookList.appendChild(bookElement);
bookElement.appendChild(title);
bookElement.appendChild(author);
bookElement.appendChild(pages);
bookElement.appendChild(readButton);
bookElement.appendChild(deleteButton)
}
};


displayBook();
