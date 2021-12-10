// book class
// properties: title, author, pages, read (boolean)
// methods: info
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;  
  }
  info() {
    return `${title} by ${author}, ${pages} pages, ${(read) ? 'already read' : 'not read yet'}`;
  }
}

// library class 
// properties: myLibray (array)
// methods: 
class Library {
  // constructor 
  constructor() {
    this.currLibrary = []; // array to store book objects 
  }
  // create a new book object and add to the library 
  addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    this.currLibrary.push(newBook);
  }
  // delete a book from library 
  deleteBookFromLibrary(indexToRemove) {
    this.currLibrary.splice(indexToRemove, 1);
  }
}

// create a new library 
const myLibrary = new Library();
// push dummy books to library 
myLibrary.addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
myLibrary.addBookToLibrary('Sapiens: A Brief History of Human Kind', 'Yuval Noah Harrari', 443, true);
myLibrary.addBookToLibrary('Atomic Habits', 'James Clear', 320, false);
myLibrary.addBookToLibrary('Extreme Ownership', 'Jocko Willink, Leif Babin', 320, false);

// querySelector
const newBookForm = document.querySelector('.new-book-form');
const overlay = document.querySelector('#overlay');
const addBookButton = document.querySelector('.add-book');
const formCloseButton = document.querySelector('.close-button');
const firstInputField = document.querySelector('#new-title');
const newTitle = document.querySelector('#new-title');
const newAuthor = document.querySelector('#new-author');
const newPages = document.querySelector('#new-pages');
const newRead = document.querySelector('#new-read');
const display = document.querySelector('.display');

// add dummy books to display 
createBookDisplay();

// loop through library and display each in a card 
// take in no parameters 
// return no results 
function createBookDisplay() {
  // remove what's already displayed
  while(display.firstChild) {
    display.removeChild(display.lastChild);
  }
  // loop thorugh array to access each object
  for (let i = 0; i < myLibrary.currLibrary.length; i++) {
    // create new card with content 
    createNewCard(i);
  }
  // add eventListener to remove buttons 
  addEventListenerToRemoveButtons();
  /*
  // add eventListenr to read button 
  addEventListenerToToggleRead();
  */
}

// create new card with populated field 
// take in i from for loop iteration
// return no results 
function createNewCard(i) {
  // create a new card
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.myLibraryIndex = i;
  // create container divs within  card 
  const bookInfo = document.createElement('div');
  bookInfo.classList.add('book-info');
  const cardButtons = document.createElement('div');
  cardButtons.classList.add('card-buttons');
  // create and populate each element in card
  const title = document.createElement('h3');
  title.classList.add('title');
  title.textContent = myLibrary.currLibrary[i].title;
  const author = document.createElement('h3');
  author.classList.add('author');
  author.textContent = `By: ${myLibrary.currLibrary[i].author}`;
  const pages = document.createElement('h3');
  pages.classList.add('pages');
  pages.textContent = `# Pages: ${myLibrary.currLibrary[i].pages}`;
  const read = document.createElement('button');
  read.type = 'button';
  read.classList.add('read');
  read.textContent = `${(myLibrary.currLibrary[i].read ? 'Read' : 'Not Read')}`;
  const remove = document.createElement('button');
  remove.type = 'button';
  remove.classList.add('remove');
  remove.textContent = 'Remove';
  // add elements to container div
  bookInfo.appendChild(title);
  bookInfo.appendChild(author);
  bookInfo.appendChild(pages);
  cardButtons.appendChild(read);
  cardButtons.appendChild(remove);
  // add divs to card 
  card.appendChild(bookInfo);
  card.appendChild(cardButtons);
  // add each card to display section
  display.appendChild(card);
  // color read button
  if (read.textContent === 'Read') {
    read.style.backgroundColor = '#90EE90';
    read.style.border = '1px solid #2E8B57'
  } else {
    read.style.backgroundColor = '#FFFAA0'
    read.style.border = '1px solid #C4B454'
  }
}

// eventListener on add button
addBookButton.addEventListener('click', () => {
  newBookForm.classList.add('active');
  overlay.classList.add('active');
  newTitle.select();
});

// eventListener on form close button 
formCloseButton.addEventListener('click', () => {
  newBookForm.classList.remove('active');
  overlay.classList.remove('active');
})

// eventListener on submit button 
newBookForm.addEventListener('submit', (e) => {
  // prevent submit from reloading page 
  e.preventDefault();
  // get value from input fields then clear them 
  let newTitleValue = newTitle.value;
  newTitle.value = '';
  let newAuthorValue = newAuthor.value;
  newAuthor.value = '';
  let newPagesValue = newPages.value;
  newPages.value = '';
  let newReadValue = newRead.checked;
  newRead.checked = false;
  // close form and disable overlay
  newBookForm.classList.remove('active');
  overlay.classList.remove('active');
  // update myLibrary and display
  myLibrary.addBookToLibrary(newTitleValue, newAuthorValue, newPagesValue, newReadValue);
  createBookDisplay();
});

// add eventListener to each delete button 
// take in no parameters 
// retun no results 
function addEventListenerToRemoveButtons() {
  const removeButtons = document.querySelectorAll('.remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const indexToRemove = e.target.parentNode.parentNode.dataset.myLibraryIndex;
      myLibrary.deleteBookFromLibrary(indexToRemove);
      // repopulate the display field after deletion
      createBookDisplay();
    });
  });
}



/*


// add eventListener to each read/unread toggle button
// take in no parameter 
// return no results 
function addEventListenerToToggleRead() {
  const readButtons = document.querySelectorAll('.read');
  readButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // update book object 
      const indexToToggle = e.target.parentNode.parentNode.dataset.myLibraryIndex;
      // change read property in object 
      if (myLibrary[indexToToggle].read) {
        myLibrary[indexToToggle].read = false;
      } else {
        myLibrary[indexToToggle].read = true;
      }
      // rerender display 
      createBookDisplay();
    });
  });
}

// example Book object 
addBookToLibrary('Spaiens: A Brief History of Human Kind', 'Yuval Noah Harrari', 443, true);
addBookToLibrary('Atomic Habits', 'James Clear', 320, true);
addBookToLibrary('Extreme Ownership', 'Jocko Willink, Leif Babin', 320, false);
createBookDisplay();
*/