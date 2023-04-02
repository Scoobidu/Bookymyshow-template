const mongodb = require("mongodb");

const mongoURI = `mongodb+srv://Bobby:Sahi1Atlas@cluster0.rx7qkbf.mongodb.net/?retryWrites=true&w=majority`;

let mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
const { bookMovieSchema } = require("./schema");

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
