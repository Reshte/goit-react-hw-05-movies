import { useState,  useEffect  } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import { getMovies } from '../components/servises/Fetch'
import { useSearchParams} from "react-router-dom";


export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query")

  useEffect(() => {
    if (query === '' || query === null) return;
    (async function () {
          try {
          const movies = await getMovies(query)
          setSearchMovies(movies)
        } catch (error) {
          console.log(error)
          }
        })()               
    
  }, [query]);


  const handelFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.query.value)
    setSearchParams(query !== '' ? { query: form.elements.query.value } : {})
     form.reset();
  };

  
  return (
    <main>
      <h1>Search movie</h1>
      <form onSubmit={handelFormSubmit}>
            <input type="text"
             autoComplete="off"
             name="query"
             autoFocus
            />
        <button type="submit">Search</button>
      </form>
      
      <MoviesList movies={searchMovies} url='' query={`/movies?query=${query}`} />
      </main>
  );
};

