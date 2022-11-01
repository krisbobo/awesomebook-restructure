export default class Navigation {
  constructor() {
    this.year = document.querySelector('#year');
    this.contact = document.querySelector('#contact');
    this.bookLibrary = document.querySelector('#book-library');
    this.newBook = document.querySelector('#new-book');
    this.list = document.querySelector('.list');
    this.add = document.querySelector('.add');
    this.contactMe = document.querySelector('.contact-me');
  }

  view() {
    this.list.addEventListener('click', (e) => {
      e.preventDefault();
      this.bookLibrary.style.display = 'block';
      this.contact.style.display = 'none';
      this.newBook.style.display = 'none';
    });
    this.add.addEventListener('click', (e) => {
      e.preventDefault();
      this.bookLibrary.style.display = 'none';
      this.contact.style.display = 'none';
      this.newBook.style.display = 'flex';
    });
    this.contactMe.addEventListener('click', (e) => {
      e.preventDefault();
      this.bookLibrary.style.display = 'none';
      this.contact.style.display = 'block';
      this.newBook.style.display = 'none';
    });
  }
}