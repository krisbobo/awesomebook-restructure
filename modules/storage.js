export default class Store {
  static getBooks() {
    let bookInputs;
    if (localStorage.getItem('bookInputs') === null) {
      bookInputs = [];
    } else {
      bookInputs = JSON.parse(localStorage.getItem('bookInputs'));
    }
    return bookInputs;
  }

  static addBook(book) {
    const bookInputs = Store.getBooks();
    bookInputs.push(book);
    localStorage.setItem('bookInputs', JSON.stringify(bookInputs));
  }

  static removeBook(del) {
    const bookInputs = Store.getBooks();
    bookInputs.forEach((book, index) => {
      if (book.del === del) {
        bookInputs.splice(index, 1);
      }
    });

    localStorage.setItem('bookInputs', JSON.stringify(bookInputs));
  }
}