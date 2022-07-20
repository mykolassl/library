const addBookBtn = document.querySelector('#add-book');
const bookDialog = document.querySelector('#book-dialog');
const cancelFormBtn = document.querySelector('#cancel-form');
const form = document.querySelector('form[method="dialog"]');

let bookList = [];

function Book(_author, _title, _pages, _hasBeenRead) {
    this.author  = _author;
    this.title = _title;
    this.pages = _pages;
    this.hasBeenRead = _hasBeenRead;
    this.setReadStatus = function() {
        this.hasBeenRead = !this.hasBeenRead;
    }
}

function renderBooks() {
    bookList.forEach((book) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `<h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.pages} pages</p>
        <p>${book.hasBeenRead ? 'Read' : 'Not read'}</p>`;
        document.querySelector('main').appendChild(bookDiv);
    });
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

    const book = new Book(author, title, pages, hasBeenRead);
    bookList.push(book);

    renderBooks();
});