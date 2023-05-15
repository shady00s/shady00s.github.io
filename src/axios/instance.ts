import axios from "axios";

const axiosInstance = axios.create(
    {
        baseURL: 'https://api.themoviedb.org/3',
        params: {
            api_key: "de0483488595a5d9c37d287931d46c76",
            
           
        }
    }
)
export default axiosInstance