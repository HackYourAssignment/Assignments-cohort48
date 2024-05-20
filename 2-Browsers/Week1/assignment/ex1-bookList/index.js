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
//cspell: enable

function createBookList(books) {
  const bookList = document.createElement('ul');

  books.forEach(book => {
    const item = document.createElement('li');

    item.style.backgroundColor = book.alreadyRead? 'green' : 'red'; //green if read, red - if not

    const titleAndAuthor = document.createElement('p'); //create <p>
    titleAndAuthor.textContent = `${book.title} by ${book.author}`; // add text to <p>
    item.appendChild(titleAndAuthor);

    const cover = document.createElement('img');
    cover.src = `${book.coverUrl}`;
    cover.alt = `Cover of ${book.title}`;
    item.appendChild(cover);

    bookList.appendChild(item);

  });
  return bookList;
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      coverUrl: "./assets/the_design_of_everyday_things.jpg"
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      coverUrl: "./assets/the_most_human_human.jpg"
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      coverUrl: "./assets/the_pragmatic_programmer.jpg"
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
