import { useState,  useEffect  } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import { getMovies } from '../components/servises/Fetch'
import { useSearchParams} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import TextField from '@mui/material/TextField';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  // const [status, setStatus] = useState('')
  const query = searchParams.get("query")

  useEffect(() => {
    if (query === '' || query === null) return;

    (async function () {
          try {
            const movies = await getMovies(query)
            if (movies.length > 0) { setSearchMovies(movies) } else {
            setSearchMovies([])
            toast('Sorry, there are no movies matching your search query. Please try again.')
            return
       }
            
              
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
      <h1 style={{ textAlign: 'center' }}>Search movie</h1>
      <form  style={{ textAlign: 'center' }} onSubmit={handelFormSubmit}>
         <TextField
          id="outlined-textarea"
          type="text"
          sx={{ m: 1, width: '40ch' }}
          autoComplete="off"
            color="success"
          name="query"
          autoFocus
          label="Search"
          placeholder="Movie title"
          />     
        <button type="submit">Search</button>
      </form>
      <Toaster  position="top-right" reverseOrder={false} />
      <MoviesList movies={searchMovies} url='' query={`/movies?query=${query}`} />
      </main>
  );
};

export default Movies;
