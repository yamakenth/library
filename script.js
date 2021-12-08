// array to store book objects 
let myLibrary = [];

// book constructor
// properties: title, author, pages, read (boolean)
// methods: info
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ${(read) ? 'already read' : 'not read yet'}`;
  }
}

// creat a book object based on arguments and push to library array 
// take in title, author, pages, read 
// return no results 
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

// loop through library and display each in a card 
// take in no parameters 
// return no results 
function createBookDisplay() {
  // select the display div
  const display = document.querySelector('.display');
  // loop thorugh array to access each object
  for (let i = 0; i < myLibrary.length; i++) {
    // create a new card
    const card = document.createElement('div');
    card.classList.add('card');
    // create and populate book info section
    const title = document.createElement('h3');
    title.classList.add('title');
    title.textContent = myLibrary[i].title;
    const author = document.createElement('h3');
    author.classList.add('author');
    author.textContent = myLibrary[i].author;
    const pages = document.createElement('h3');
    pages.classList.add('pages');
    pages.textContent = myLibrary[i].pages;
    const read = document.createElement('button');
    read.type = 'button';
    read.classList.add('read');
    read.textContent = `${(myLibrary[i].read ? 'Read' : 'Not Read')}`;
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.classList.add('remove');
    remove.textContent = 'Remove';
    // add book info to card 
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(remove);
    // add each card to display section
    display.appendChild(card);
  }
}








// example Book object 
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('Spaiens: A Brief History of Human Kind', 'Yuval Noah Harrari', 443, true);
addBookToLibrary('Atomic Habits', 'James Clear', 320, true);
addBookToLibrary('Extreme Ownership', 'Jocko Willink, Leif Babin', 320, false);
