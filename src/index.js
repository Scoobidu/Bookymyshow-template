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

// app.get("/api/all-bookings", async (req, res) => {
//   const allDogs = await Book.find();
//   return res.status(200).json(allDogs);
// });

app.get("/api/all-bookings", async (req, res) => {
  console.log("server");
  const allbookings = await Book.find({});
  res.status(200).json(allbookings);
  // console.log(allbookings);
  // res.send(allbookings);
});

app.post("/api/booking", async (req, res) => {
  const newBook = new Book(req.body);
  const insertedVook = await newBook.save();
  return res.status(201).json(insertedVook);

  // try {
  //   const newCharacter = await newBook.save();
  //   res.status(201).json({ newCharacter });
  // } catch (err) {
  //   res.status(400).json({ message: err.message });
  // }

  // await newBook.save((err) => { if (err) console.log(err);});
  // console.log(newBook);
  // res.status(201).json(newBook);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
