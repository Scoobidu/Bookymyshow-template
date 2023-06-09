const mongodb = require("mongodb");
require("dotenv").config();

const mongoURI = process.env.DATABASE;

let mongoose = require("mongoose");
const { bookMovieSchema } = require("./schema");

//------ connecting to monoDB --------
const connect = async () => {
  await mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connection established with mongodb server online");
    })
    .catch((err) => {
      console.log("error while connection", err);
    });
};

const Book = mongoose.model("Book", bookMovieSchema);

exports.Book = Book;
exports.connect = connect;
