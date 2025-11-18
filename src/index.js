import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const img = "./Images/book_01.jpg";
// const author = "Mel Robbins, Sawyer Robbins";
// const title = "The Let Them Theory";

const books = [
  {
    author: "Mel Robbins, Sawyer Robbins",
    title: "The Let Them Theory",
    img: "./Images/book_01.jpg",
    id: 1,
  },

  {
    author: "John Kennedy",
    title: "How to Test Negative for Stupid",
    img: "https://m.media-amazon.com/images/I/71tbImx2YVL._SL1500_.jpg",
    id: 2,
  },

  {
    author: "John Grisham",
    title: "The Widow: A Novel",
    img: "https://m.media-amazon.com/images/I/81CWXchKvRL._SL1500_.jpg",
    id: 3,
  },

  {
    author: "Virginia Roberts Giuffre",
    title: "Nobody's Girl: A Memoir of Surviving Abuse",
    img: "https://m.media-amazon.com/images/I/61KzpshHPZL._SL1500_.jpg",
    id: 4,
  },
];

// const someFunc = (param1, param2) => {
//   console.log(param1, param2);
// };

// someFunc("job", "developer");

// const names = ["Andrey", "Victoria", "Alexander"];

// const newNames = names.map((name) => {
//   console.log(name);
//   return <h1>{name}</h1>;
// });

//console.log(newNames);

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((book) => {
        console.log(book);
        return <Book book={book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props.book;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
