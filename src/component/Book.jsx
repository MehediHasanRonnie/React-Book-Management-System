import { useNavigate } from "react-router-dom";

const Book = ({ book, handleRemoveBook }) => {
  const navigate = useNavigate();
  const { id, name, author, price } = book;
  return (
    <div className="book">
      <h2>{name}</h2>
      <div className="bookDetails">
        <p>Author: {author}</p>
        <p>Price: {price}</p>
        <p>Date: {new Date().toDateString()}</p>
      </div>
      <div className="buttons">
        <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
        <button onClick={() => handleRemoveBook(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Book;
