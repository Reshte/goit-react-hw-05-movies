import { getPopularMovies } from '../servises/Fetch'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


export const MoviesList = () => {
  const [movies, setMovies] = useState([])
   
  useEffect(() => {
    if (movies.length > 0){return} else{
      (async function () {
        try {
          const movies = await getPopularMovies()
          setMovies(movies)          
        } catch (error) {
          console.log(error)
        }
        })()
     }
   
  },[movies])
    
      return(
        <ul>
            {movies.map(({ id, original_title}) => (
              <li key={id}>
            <Link to={`${id}`}>
                  <h2>{original_title}</h2>
            </Link></li>))}
        </ul>
    )
}

