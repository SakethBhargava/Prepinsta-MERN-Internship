document.addEventListener('DOMContentLoaded', function() {
  const bookList = document.getElementById('bookList');
  const addBookForm = document.getElementById('addBookForm');

  addBookForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      addBook(title, author);
      addBookForm.reset();
  });

  function addBook(title, author) {
      const bookItem = document.createElement('div');
      bookItem.classList.add('book-item');
      bookItem.innerHTML = `<strong>Title:</strong> ${title}<br><strong>Author:</strong> ${author}`;
      bookList.appendChild(bookItem);
  }
});
