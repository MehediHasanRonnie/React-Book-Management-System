import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/header";
import ListBook from "./component/ListBook";
import AddBook from "./component/AddBook";
import BookProvider from "./context/BookContext";
import EditBook from "./component/EditBook";

function App() {
  return (
    <div className="container">
      <BookProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ListBook />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </BookProvider>
    </div>
  );
}

export default App;
