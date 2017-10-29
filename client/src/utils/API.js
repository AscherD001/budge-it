import axios from "axios";

export default {
  // Gets all books
  getBills:function() {
    return axios.get("/api/bill/");
  },
  // Gets the book with the given id
  getBill: function(id) {
    return axios.get("/api/bill/" + id);
  },
  // Deletes the book with the given id
  deleteBill: function(id) {
    return axios.delete("/api/bill/" + id);
  },
  // Saves a book to the database
  saveBill: function(billData) {
    return axios.post("/api/bill", billData);
  }
};
