import React from "react";

function BookDetails(props) {
  return (
    <div>
      <h1>Book Details</h1>

      {props.books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;