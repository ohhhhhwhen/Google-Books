import React, { useState } from "react";
import API from "../../utils/API";

function Search() {
  const [result, setResults] = useState([]);
  const [search, setSearch] = useState("");

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
      if (!search) {
        return;
      }

      API.googleBooks(search)
        .then(res => {
          if (res.data.length === 0) {
            throw new Error("No results found.");
          }
          if (res.data.status === "error") {
            throw new Error(res.data.message);
          }
          console.log(res.data.items);
          setResults(res.data.items);
        })
  };

  const handleSaveBook = (book) => {
      fetch('/save-link', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          bookImg: book.volumeInfo.imageLinks.thumbnail,
          description: book.volumeInfo.description,
          link: book.volumeInfo.previewLink
        })
      })
    };


  return (
    <div className="container">
      <h1>Let Us Google Some Books</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            type="text"
            onChange={handleInputChange}
            className="form-control"
            placeholder="Search for Books"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-danger" style={{marginBottom: "20px"}}>
          Search
        </button>
      </form>
      {result.map(book => (
        <div key={book.id}>
        <h3>{book.volumeInfo.title}</h3>
        <h5>Wriiten By: {book.volumeInfo.authors}</h5>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
        <p>{book.volumeInfo.description}</p>
        <div>
        <a className="btn btn-info" href={book.volumeInfo.previewLink}>View</a>
        <button onClick={() => handleSaveBook(book)} className="btn btn-success">Save</button>
        </div>
        <hr/>
        </div>
      ))}
    </div>
  );
}

export default Search;
