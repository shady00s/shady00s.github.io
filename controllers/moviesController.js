import axiosInstance from './../axios/inestance.js';

function popularMovies(req, res) {
    axiosInstance.get('/movie/now_playing').then(data => {
        res.status(200).json({ data: data.data.results })
    })
}


function movieDetails(req,res){
    const id = req.query.id
    axiosInstance.get(`/movie/${id}`).then(data => {
        res.status(200).json({ data: data.data })
    })
}

export { popularMovies,movieDetails }