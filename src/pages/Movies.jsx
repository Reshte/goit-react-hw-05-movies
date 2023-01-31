import { useState } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import { getMovies} from '../components/servises/Fetch'


export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchMovies , setSearchMovies ] = useState([])

  const handelInputChange = (e) => {
            setSearchQuery(e.target.value.trim())
  }
  

    const handelFormSubmit = (e) => {
      e.preventDefault()
      Request()
      reset()
  }

async function Request(){
        try {
          const movies = await getMovies(searchQuery)
          setSearchMovies(movies)
                
        } catch (error) {
          console.log(error)
        }
        }
  
    const reset = () => {
     setSearchQuery('')
 }
  return (
    <main>
      <h1>Search movie</h1>
      <form onSubmit={handelFormSubmit}>
            <input type="text"
             autoComplete="off"
             name="searchQuery"
             autoFocus
             placeholder="Search images and photos"
            value={searchQuery}
          onChange={handelInputChange} />
        <button type="submit">Search</button>
      </form>
      
      <MoviesList movies={searchMovies} url='' />
      </main>
  );
};

