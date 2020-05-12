import axios from "axios";

export default {

  googleBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
  },

  // Gets all books
  getBooks: function() {
    console.log("INSIDE UTILS API GETBOOKS FUNCTION"); //FOR DEBUG
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    console.log("INSIDE SAVE BOOKS FUNCTION"); //FOR DEBUG
    return axios.post("/api/books", bookData);
  }
};
