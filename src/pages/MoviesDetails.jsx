import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../components/servises/Fetch"
import { Link, Outlet} from "react-router-dom";

export const MoviesDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  console.log(location.state.from)
 
  const { movieId } = useParams();
  const [moviesDetails, setMoviesDetails] = useState([])
      
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
 
  
  const { poster_path, genres, title, overview, vote_average } = moviesDetails
  let genresInfo
  if(genres){ genresInfo = genres.map(genre => { return genre.name }).join(" ")}
  return (
      <div>

      <Link to={backLinkHref}>← Go back</Link>
            <img src={`http://image.tmdb.org/t/p/w400/${poster_path}`} alt="" />
            <h2>{title}</h2>
            <p>User score: {Math.round(vote_average*10)}%</p>
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


