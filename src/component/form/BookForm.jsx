import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BookForm = ({ book, handleSubmit }) => {
  const [bookState, setBookState] = useState({
    name: book ? book.name : "",
    author: book ? book.author : "",
    price: book ? book.price : "",
  });
  //console.log(bookState);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      id: uuidv4(),
      Date: new Date(),
      ...bookState,
    });
    setBookState({ name: "", author: "", price: "" });
  };
  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value,
    });
  };

  const renderInputField = (label, placeholder, name) => (
    <div className="inputField">
      <label>{label}</label>
      <input
        value={bookState[name]}
        onChange={handleChange}
        type="text"
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
  const disableedSubmit =
    !bookState.name || !bookState.author || !bookState.price;
  return (
    <form onSubmit={onSubmit} className="form">
      {renderInputField("Book Name", "Enter name of the book.", "name")}
      {renderInputField("Author Name", "Enter name of the author.", "author")}
      {renderInputField("Book Price", "Enter price of the book.", "price")}
      <button type="submit" className="btnForm" disabled={disableedSubmit}>
        {book ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default BookForm;
