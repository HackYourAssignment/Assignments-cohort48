

function createBookList(books) {
  const ulElement = document.createElement("ul");

  books.forEach(book =>{
    const liElement = document.createElement("li");
    const paragraph = document.createElement("p");
    paragraph.textContent = `${book.title} By ${book.author} ${book.isbn}`
    liElement.appendChild(paragraph)
    liElement.style.backgroundColor = book.alreadyRead ? "green " : "red" ;

    const imgCover = document.createElement("img")
    imgCover.src = `${book.coverBook}`
    imgCover.alt = `cover of ${book.title}`
    liElement.appendChild(imgCover)

    ulElement.appendChild(liElement)
  });
  return ulElement
  
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      coverBook : "./assets/the_design_of_everyday_things.jpg"
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      coverBook : "./assets/the_most_human_human.jpg"
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      coverBook : "./assets/the_pragmatic_programmer.jpg"
    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
