import React, { useState, useEffect } from "react";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);


  useEffect(() => {
    fetch("/get-links", {
      method: 'GET',
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(links) {
        setSavedBooks(links);
      });
  }, [savedBooks]);

  return (
    <div className="container">
      <h1>Saved Books</h1>
      {savedBooks.map(bookList => {
        return (
          <div key={bookList._id}>
            <h3>{bookList.title}</h3>
            <h5>Wriiten By: {bookList.authors}</h5>
            <img src={bookList.bookImg} alt={bookList.title} />
            <p>{bookList.description}</p>
            <div>
              <a className="btn btn-info" href={bookList.link}>
                View
              </a>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Saved;
