import { useState } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import { getMovies } from '../components/servises/Fetch'
import { useSearchParams } from "react-router-dom";


export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([])
  
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";
    

const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };
  

const handelFormSubmit = (e) => {
      e.preventDefault()
      Request()
      reset()
  }

async function Request(){
        try {
          const movies = await getMovies(productName)
          setSearchMovies(movies)
                
        } catch (error) {
          console.log(error)
        }
        }
  
const reset = () => {
     setSearchParams('')
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
            value={productName}
          onChange={(e) => updateQueryString(e.target.value.trim())} />
        <button type="submit">Search</button>
      </form>
      
      <MoviesList movies={searchMovies} url='' />
      </main>
  );
};

