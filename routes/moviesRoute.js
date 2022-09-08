import express from 'express';
import { popularMovies,movieDetails } from '../controllers/moviesController.js';

const moviesRoutes = express.Router()


moviesRoutes.get('/popularMovies',popularMovies)
moviesRoutes.get('/movieDetails',movieDetails)

export default moviesRoutes