import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
// const img = "./Images/book_01.jpg";
// const author = "Mel Robbins, Sawyer Robbins";
// const title = "The Let Them Theory";

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
        //console.log(book);
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
