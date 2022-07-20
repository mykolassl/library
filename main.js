const addBookBtn = document.querySelector('#add-book');
const bookDialog = document.querySelector('#book-dialog');
const cancelFormBtn = document.querySelector('#cancel-form');

addBookBtn.addEventListener('click', () => {
    bookDialog.showModal();
});

cancelFormBtn.addEventListener('click', () => {
    bookDialog.close();
});