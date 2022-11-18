const express = require("express");
const BookController = require("../controllers/books");
const api = express.Router();

api.post("/addBook", BookController.addBook);
api.get("/getBook", BookController.getBook);

api.delete("/deleteBook/:id",  BookController.deleteBook);
api.put("/updateBook/:id", BookController.updateBook);

module.exports = api