//cspell: disable
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/2-Browsers/Week1#exercise-1-the-book-list

I'd like to display my three favorite books inside a nice webpage!

1. Iterate through the array of books.


1. select every book
2. print unordered list every book in p tag
3. add every book cover url
4. if read green not red


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
  // TODO your code goes in here, return the ul element
  const ul=document.createElement("ul")
  books.forEach(book=> {
  const li=document.createElement("li")
  const pic=document.createElement("img")
  li.textContent=`${book.title}${book.author}${book.isbn}`
  pic.src=book.pic
  // console.log(books)
  // console.log(ul)
  li.appendChild(pic)
  ul.appendChild(li)
  if (!book.alreadyRead) {
    li.classList.add("red")
  }
});
return ul
}

function main() {
  const myBooks = [
    {
      title: 'The Design of Everyday Things',
      author: 'Don Norman',
      isbn: '978-0465050659',
      alreadyRead: false,
      pic:"https://i.pinimg.com/originals/27/fd/70/27fd70fb285f83c3922c86c2d941e8b5.jpg"
    },
    {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      isbn: '978-1617933431',
      alreadyRead: true,
      pic:"https://w0.peakpx.com/wallpaper/653/999/HD-wallpaper-y-letter-y-fire-flame-y-letter-fire-flame-letter-y-font.jpg"

    },
    {
      title: 'The Pragmatic Programmer',
      author: 'Andrew Hunt',
      isbn: '978-0201616224',
      alreadyRead: true,
      pic:"https://s.cafebazaar.ir/images/upload/screenshot/com.WallpaperStudio.FLetterrwallpaper.images.HD-fe8ae94a-49dc-4a07-bcbb-3f849b8d7779.jpeg?x-img=v1/resize,h_600,lossless_false/optimize"

    },
  ];

  const ulElement = createBookList(myBooks);
  document.querySelector('#bookList').appendChild(ulElement);
}

window.addEventListener('load', main);
