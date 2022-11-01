import Book from './book.js';
import Store from './storage.js';

class page {
  static displayBooks() {
    const newBooks = Store.getBooks();
    newBooks.forEach((books) => page.bookList(books));
  }

  static bookList(books) {
    const list = document.getElementById('book-collection');
    const create = document.createElement('div');
    create.className = 'list-control';
    create.innerHTML = `
    <p>${books.title} <b>By</b> ${books.author}</p>
    <button class="remove-btn">Remove</button>
    `;
    list.appendChild(create);
  }

  static deleteBook(target) {
    if (target.classList.contains('remove-btn')) {
      target.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

const eventHandler = () => {
  document.addEventListener('DOMContentLoaded', page.displayBooks);

  document.querySelector('.book-input').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title && author) {
      const books = new Book(title, author);
      page.bookList(books);
      Store.addBook(books);
    }
    // to clear fields
    page.clearFields();
  });
};
  // to remove a book
document.querySelector('#book-collection').addEventListener('click', (e) => {
  page.deleteBook(e.target);
  Store.removeBook();
});

export default eventHandler;