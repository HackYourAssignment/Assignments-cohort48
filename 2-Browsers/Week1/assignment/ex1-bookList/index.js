//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.
2. For each book, create a `<p>`
element with the book title and author.
3. Use a `<ul>`  and `<li>` to display the books.
4. Add an `<img>` to each book that links to a URL of the book cover.
5. Change the style of the book depending on whether you have read it(green) or not(red).

The end result should look something like this:
https://hackyourfuture.github.io/example-pages/Browsers/Week1/1-booklist/

-----------------------------------------------------------------------------*/
function createBookList(books) {
  // get the style my book title h1
  const myBook = document.querySelector('h1');
  myBook.style.textAlign = 'center';
  myBook.style.paddingTop = '30px';
  myBook.style.fontFamily = 'cursive';
  // create List Item
  const ul = document.createElement('ul');
  ul.style.display = 'flex';
  ul.style.justifyContent = 'space-between';
  ul.style.listStyleType = 'none';

  books.forEach((book) => {
    const li = document.createElement('li');
    li.style.padding = '5px';
    li.style.margin = '5px';
    li.style.textAlign = 'center';
    li.style.flex = '1';
    li.style.maxWidth = '32%';
    li.style.backgroundColor = book.alreadyRead ? 'green' : 'red';

    const p = document.createElement('p');
    p.textContent = `${book.title} by ${book.author}`;
    li.appendChild(p);

    // create image
    // g the means is global for all title book and if we don't write this line code can not read the url file because
    // first we should remove any space between name of the url and can replace them
    const formattedTitle = book.title.replace(/ /g, '_').toLowerCase();
    const imageUrl = `./assets/${formattedTitle}.jpg`;

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `Cover of ${book.title}`;
    img.style.maxWidth = '300px';
    img.style.height = '400px';
    li.appendChild(img);

    ul.appendChild(li);
  });
  return ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
// 
function createBookList(books) {
  const ul = document.createElement('ul');
  ul.classList.add('book-list');

  books.forEach((book) => {
    const li = document.createElement('li');
    li.classList.add('book-item');
    li.classList.add(book.alreadyRead ? 'read' : 'not-read');

    const p = document.createElement('p');
    p.textContent = `${book.title} by ${book.author}`;
    li.appendChild(p);

    const formattedTitle = book.title.replace(/ /g, '_').toLowerCase();
    const imageUrl = `./assets/${formattedTitle}.jpg`;

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `Cover of ${book.title}`;
    li.appendChild(img);

    ul.appendChild(li);
  });
  return ul;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);