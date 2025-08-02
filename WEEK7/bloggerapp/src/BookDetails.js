import React from 'react';

const BookDetails = ({ books }) => {
  // Method 1: Early return conditional rendering
  if (!books || books.length === 0) {
    return (
      <div className="section">
        <h1>Book Details</h1>
        <p>No books available</p>
      </div>
    );
  }

  return (
    <div className="section">
      <h1>Book Details</h1>
      {/* Method 2: Conditional rendering with map */}
      {books.map((book) => (
        <div key={book.id} className="book-item">
          {/* Method 3: Conditional rendering with ternary operator */}
          <h3>{book.bname ? book.bname : 'Unknown Book'}</h3>
          {/* Method 4: Logical AND operator */}
          {book.price && <h4>{book.price}</h4>}
        </div>
      ))}
    </div>
  );
};

export default BookDetails;