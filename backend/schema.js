const { Schema } = require("mongoose");

const bookMovieSchema = new Schema({
  movie: Schema.Types.String,
  slot: Schema.Types.String,
  seats: Schema.Types.Object,
});

exports.bookMovieSchema = bookMovieSchema;
