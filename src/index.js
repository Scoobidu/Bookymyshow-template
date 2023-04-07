const express = require("express");
const { connect, Book } = require("./connector");
const port = 8080;
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

connect();

//--------- get booking data ----------
app.get("/api/all-bookings", async (req, res) => {
  const allbookings = await Book.find({});
  res.status(200).json(allbookings);
});

//--------- posting booking data ----------
app.post("/api/booking", async (req, res) => {
  const newBook = new Book(req.body);
  const insertedBook = await newBook.save();
  return res.status(201).json(insertedBook);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
