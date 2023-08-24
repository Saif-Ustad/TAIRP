import express from "express";
import MovieModel from "../Models/Movies.js";
const router = express.Router();


//CREATE

router.post("/Movie", async (req, res) => {
    const newMovie = new MovieModel(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  
});


//GET

router.get("/find/:id", verify, async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
});


export default router;

