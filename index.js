function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  .then(GameofThronesData => renderBooks(GameofThronesData))
  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    const div = document.createElement('div');
    const p = document.createElement('p');

    h2.innerHTML = book.name;
    // div.innerHTML = `<p>No of pages in this book: ${book.numberOfpages}</p>`
    // p.innerHTML = `This book is available at: <a href ="${book.url}">Read now</a>`
    main.appendChild(h2);
    // main.appendChild(div);
    // div.appendChild(p);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});