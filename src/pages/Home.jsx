
import { MoviesList } from '../components/MoviesList/MoviesList'
import { useState, useEffect } from 'react';
import { getPopularMovies } from '../components/servises/Fetch'

export const Home = () => {

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
   
  }, [movies])

  return (
    <main>
      <h1>Tredding today</h1>
      <MoviesList movies={movies} url="movies/" query={'/'} />
    </main>
  );
};

