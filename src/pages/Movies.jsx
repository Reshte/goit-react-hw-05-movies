import { useState } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import { getMovies } from '../components/servises/Fetch'
import { useSearchParams } from "react-router-dom";


export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([])

  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("name") ?? "";
    

const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };
  

const handelFormSubmit = (e) => {
    const search = e.currentTarget.elements.searchQuery.value.trim()
      e.preventDefault()
      if(search ===''){return}
      updateQueryString(search)
      Request(search)
      // reset()
  }

async function Request(name){
        try {
          const movies = await getMovies(name)
          setSearchMovies(movies)
                
        } catch (error) {
          console.log(error)
        }
        }
  
  
  return (
    <main>
      <h1>Search movie</h1>
      <form onSubmit={handelFormSubmit}>
            <input type="text"
             autoComplete="off"
             name="searchQuery"
             autoFocus
            //  value={movieName}
          />
        <button type="submit">Search</button>
      </form>
      
      <MoviesList movies={searchMovies} url='' />
      </main>
  );
};

