import { useContext } from "react";
import BookForm from "./form/BookForm";
import { BookContext } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const { books, setBooks } = useContext(BookContext);
  const handleOnSubmit = (book) => {
    setBooks([...books, book]);
    navigate("/");
  };
  return (
    <div className="addForm">
      <BookForm handleSubmit={handleOnSubmit} />
    </div>
  );
};

export default AddBook;
