import express, { Request, Response } from "express"
import axiosInstance from "../../axios/instance.js"
import selectFavouriteMovies from "../../controllers/select_favourite_movies.js"


const setupProfileRoutes = express.Router()


setupProfileRoutes.get('/getIntroSelectMovies',selectFavouriteMovies)

export default setupProfileRoutes