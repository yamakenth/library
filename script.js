// array to store book objects 
let myLibrary = [];

// book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${(read) ? 'already read' : 'not read yet'}`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// example Book object 
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());