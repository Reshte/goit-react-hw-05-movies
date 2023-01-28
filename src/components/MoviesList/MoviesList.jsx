import { getPopularMovies } from '../servises/Fetch'
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export const MoviesList = () => {
    // const [movieName, setmovieName] = useState('')
    // const [movieLink, setMmovieLink] = useState('')

    // async function createMoviesMarkup() {
    //     const response = await getPopularMovies()
    //     const movies = response.data.results
    //     return movies
    // }
    
    const movies = getPopularMovies().then(data => console.log(data))
      console.log(movies);

    return(
        <ul>
            {movies.map(({ id, original_title}) => (
                        <li key={id}><Link to={`${id}`}>
             <h2>{original_title}</h2>
          </Link></li>))}
        </ul>
    )
}

