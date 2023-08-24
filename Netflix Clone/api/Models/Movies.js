
import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    year: { type: String },
    genre: { type: Array },
    category: { type: Array },
    rating: { type: String }
  },
  { timestamps: true }
);

const MovieModel = mongoose.model("Movie", MovieSchema);

export default MovieModel;