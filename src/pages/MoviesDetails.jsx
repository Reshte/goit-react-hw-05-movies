import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../components/servises/Fetch"
import {  Outlet } from "react-router-dom";
import { Suspense } from "react";
import { Loader } from "components/Loader/Loader";
import { Link, Container, Poster,PosterWrapper, WrapperInfo} from './MoviesDetails.styled'


export const MoviesDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";
 
  const { movieId } = useParams();
  const [moviesDetails, setMoviesDetails] = useState([])
  const [loading, setLoading] = useState(false)
      
  useEffect(() => {
    if (movieId) {
      (async function () {
      setLoading(true)
        try {
          const movies = await getMovieDetails(movieId)
          setMoviesDetails(movies)
        } catch (error) {
          console.log(error)
        }
        setLoading(false)
        })()}

  }, [movieId])
 
  const { poster_path, genres, title, overview, vote_average, release_date } = moviesDetails
  let genresInfo
  let releasedate
  if (genres) { genresInfo = genres.map(genre => { return genre.name }).join(" ") }
  if (release_date){releasedate = release_date.slice(0,4)}
  return (
    <div>
      { loading && <Loader />}
      {!loading && <div>
      <Link to={backLinkHref}>← Go back</Link>
      
        <Container>
          <PosterWrapper>
            <Poster src={`http://image.tmdb.org/t/p/w400/${poster_path}`} alt="poster" />
          </PosterWrapper>
           
          <WrapperInfo>
             <h2>{title}  ({releasedate})</h2>
            <p>User score: {Math.round(vote_average*10)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Geners</h3>
            <p>{genresInfo}</p>
           </WrapperInfo>
        </Container>
     
      <Container style={{fontSize: '20px', listStyle: 'none'}}>
        <li>
          <Link to="cast" >Cast</Link>
        </li>
        <li>
         <Link to="reviews" >Reviews</Link>
        </li>
       </Container>
        <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>}
    </div>
  
    )
};

export default MoviesDetails;
