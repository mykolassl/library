const addBookBtn = document.querySelector('#add-book');
const bookDialog = document.querySelector('#book-dialog');
const cancelFormBtn = document.querySelector('#cancel-form');
const form = document.querySelector('form[method="dialog"]');

let bookList = [];
let bookID = 1;

function Book(_author, _title, _pages, _hasBeenRead, _id) {
    this.author  = _author;
    this.title = _title;
    this.pages = _pages;
    this.hasBeenRead = _hasBeenRead;
    this.id = _id;
}

Book.prototype.setReadStatus = function() {
    this.hasBeenRead = !this.hasBeenRead;
}

function addBook(book) {
    const bookDiv = document.createElement('div');
    
    if(book.hasBeenRead) bookDiv.classList.add('read');
    
    bookDiv.classList.add('book');
    bookDiv.setAttribute('data-id', bookID);
    bookDiv.innerHTML = `<h3>${book.title}</h3>
    <p>Written by ${book.author}</p>
    <p>${book.pages} pages`;

    const container = document.createElement('div');
    
    const readStatus = document.createElement('p');
    readStatus.innerText = book.hasBeenRead ? 'Read' : 'Not read';
    bookDiv.appendChild(readStatus);
    
    const changeReadStatusBtn = document.createElement('button');
    changeReadStatusBtn.classList.add('read-btn');
    changeReadStatusBtn.innerText = 'Change read status';
    changeReadStatusBtn.addEventListener('click', () => {
        book.setReadStatus();
        bookDiv.classList.toggle('read');        
        readStatus.innerText = book.hasBeenRead ? 'Read' : 'Not read';
    });
    container.appendChild(changeReadStatusBtn);

    const removeBookBtn = document.createElement('button');
    removeBookBtn.classList.add('remove-btn');
    removeBookBtn.innerText = 'Remove';
    removeBookBtn.addEventListener('click', () => {
        bookList = bookList.filter((e) => e.id !== parseInt(bookDiv.dataset.id));
        bookDiv.remove();
    });
    container.appendChild(removeBookBtn);

    bookDiv.appendChild(container);
    document.querySelector('main').appendChild(bookDiv);
    bookID++;
}

addBookBtn.addEventListener('click', () => {
    bookDialog.showModal();
});

cancelFormBtn.addEventListener('click', () => {
    bookDialog.close();
});

form.addEventListener('submit', () => {
    const author = document.querySelector('#author').value;
    const title = document.querySelector('#title').value;
    const pages = document.querySelector('#pages').value;
    const hasBeenRead = document.querySelector('#read-status').checked;

    const book = new Book(author, title, pages, hasBeenRead, bookID);
    bookList.push(book);

    addBook(book);
});