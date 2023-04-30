import { Request, Response } from "express";
import axiosInstance from "../axios/instance.js";

export default async function selectFavouriteMovies(req: Request, res: Response) {



    try {
        // get genre list
        const genreResponse = await axiosInstance.get('/genre/movie/list')
        const genreList = await genreResponse.data.genres
        // get 9 movies each movie from different genre
        const newGenreList = []
        let randomIndex = 0
        for (let index = 0; index < genreList.length; index++) {
            randomIndex = Math.round(Math.random() * genreList.length)

            let isFound = newGenreList.findIndex((data) => data.id === newGenreList[randomIndex]?.id)

            if (isFound === -1 && newGenreList.length <= 8 && genreList[randomIndex]?.id !== 1074) {
                newGenreList.push(genreList[randomIndex])
            } else if (newGenreList.length > 9) {
                break
            }

        }
        //get 9 random movies for each genre
        const moviesList = []
        let randomMovieIndex = 0
        const promise = newGenreList.map(async (data) => {

            const movie = await axiosInstance.get(`/discover/movie`, { params: { with_genres: data.id.toString() } });
            randomMovieIndex = Math.round(Math.random() * movie.data.results.length)

               
                    
                    
                    moviesList.push({title:movie.data.results[randomIndex].title,poster_path:movie.data.results[randomIndex].poster_path,});
                



        })
        await Promise.all(promise)
        res.json({ message: "succssess", data: moviesList })


    } catch (error) {
        console.log(error);
        res.json({ message: "error", error: error })

    }


}

