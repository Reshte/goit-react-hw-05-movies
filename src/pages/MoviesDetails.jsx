import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../components/servises/Fetch"
import { Link, Outlet} from "react-router-dom";

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [moviesDetails, setMoviesDetails] = useState([])
   const navigate = useNavigate()
    
  useEffect(() => {
    if(movieId){ (async function () {
        try {
          const movies = await getMovieDetails(movieId)
          setMoviesDetails(movies)
                
        } catch (error) {
          console.log(error)
        }
        })()}

  }, [movieId])
 
  const comeBack = () => {
     navigate("/movies", { replace: true });
  }


  const { poster_path, genres, title, overview, vote_average } = moviesDetails
  let genresInfo
  if(genres){ genresInfo = genres.map(genre => { return genre.name }).join(" ")}
  return (
      <div>
       <button type="button" onClick={comeBack}>← Go back</button>
            <img src={`http://image.tmdb.org/t/p/w400/${poster_path}`} alt="" />
            <h2>{title}</h2>
            <p>User score: {vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Geners</h3>
     <p>{genresInfo}</p>
     
      <ul>
        <li>
          <Link to="cast" >Cast</Link>
        </li>
        <li>
         <Link to="reviews" >Reviews</Link>
        </li>
       </ul>
      <Outlet />
        </div>
  
    )
};


