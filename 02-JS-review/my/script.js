const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// // Destructuring

// const books = getBooks();

// const book = getBook(1);

// // const title = book.title;
// // const author = book.author;

// const { title, author, pages, genres, publicationDate, hasMovieAdaptation } =
//   book;

// console.log(author, title, genres);

// // const primaryGenre = genres[0];
// // const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// console.log(primaryGenre, secondaryGenre, otherGenres);

// // const newGenres = [...genres, "epic fantasy"];
// const newGenres = ["epic fantasy", ...genres];

// newGenres;

// const updatedBook = {
//   ...book,
//   moviePublicationDate: "2001-12-19", // add new property
//   pages: 1210, // overrides original pages property (must be done after spreading the object, othervise the object will override the previously added propery)
// };

// updatedBook;

// // function getYear(str) {
// //   return str.split("-")[0];
// // }

// const getYear = (str) => str.split("-")[0];

// const summaryString = `${title} is a ${pages}-page long book that was written by ${author} and published in ${getYear(
//   publicationDate
// )}.\
// the book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;

// summaryString;

// const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand";
// pagesRange;
// console.log(`The book has ${pagesRange} pages`);

// console.log(true && "Some String");
// console.log(false && "Some String");

// // falsy : 0, '', null, undefined
// console.log("Martin" && "Some String");
// console.log(0 && "Some Sting");

// console.log(true || "Some String");
// console.log(false || "Some String");

// console.log(book.translations.spanish);

// const spanishTranslation = book.translations.spanish || "Not translated ";
// spanishTranslation;

// const grolandianTranslation = book.translations.grolandian || "Not translated ";
// grolandianTranslation;

// console.log(0 || "no data");
// console.log(0 ?? "no data");

// function getTotalReviewCount(book) {
//   const googreads = book.reviews?.goodreads?.reviewsCount ?? 0; // reads goodreads only if revews is defined, and reads reviewsCount only when goodreads is defined
//   const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // reads librarything only if revews is defined, and reads reviewsCount only when librarything is defined
//   return googreads + librarything;
// }

// console.log(getTotalReviewCount(book));

// const book3 = getBook(3);

// console.log(getTotalReviewCount(book3));

/*
// // Arrays stuff

const books = getBooks();

const x = [1, 2, 3, 4].map((el) => el * 2);
console.log(x);

const titles = books.map((b) => b.title);
console.log(titles);

// const essentialData = books.map(book => {
//   return {
//     title : books.title,
//     author : book.author
//   }
// });

// essentialData;


function getTotalReviewCount(book) {
  const googreads = book.reviews?.goodreads?.reviewsCount ?? 0; // reads goodreads only if revews is defined, and reads reviewsCount only when goodreads is defined
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // reads librarything only if revews is defined, and reads reviewsCount only when librarything is defined
  return googreads + librarything;
}

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

essentialData;

const longBooks = books.filter(
  (book) => book.pages >= 500 && book.hasMovieAdaptation
);
longBooks;

const adventureBooksEssentialData = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooksEssentialData;

// 02 Reduce
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
pagesAllBooks;

// 02 Sort
const arr = [3, 2, 1, 2, 32, 12, 24];
const sorted = arr.sort((a, b) => a - b);
sorted;
arr;
const arr2 = [3, 2, 1, 2, 32, 12, 24];
const sorted2 = arr2.slice().sort((a, b) => a - b);
sorted2;
arr2;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
const titlesSortedByPages = sortedByPages.map((book) => book.title);
const pagesSortedByPages = sortedByPages.map((book) => book.pages);
titlesSortedByPages;
pagesSortedByPages;

// 02 Immutable Arrays

// Add a book to an array

const newBook = {
  id: 6,
  title: "Martin dans le foret",
  author: "Martin Le Foret",
};

const booksAfterAdd = [...books, newBook];
var v = booksAfterAdd.map((book) => book.title);
v;

// remove a book

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
v = booksAfterDelete.map((book) => book.title);
v;

// update a book

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
v = booksAfterDelete.map((book) => book.title);
v;
v = booksAfterDelete.map((book) => book.pages);
v;

v = booksAfterUpdate.map((book) => book.title);
v;
v = booksAfterUpdate.map((book) => book.pages);
v;

*/

// console.log(fetch("https://jsonplaceholder.typicode.com/todos"));

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// console.log("Martin");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

// const todos = getTodos();

// console.log(todos);

// console.log("Martin");

const todos = await getTodos();

console.log(todos);

console.log("Martin");
