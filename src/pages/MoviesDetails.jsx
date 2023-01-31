import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../components/servises/Fetch"

export const MoviesDetails = () => {
  const { movietId } = useParams();
  console.log(movietId)
  
  const [moviesDetails, setMoviesDetails] = useState([])
      
  useEffect(() => {
    if(movietId){ (async function () {
        try {
          const movies = await getMovieDetails(movietId)
          console.log(movies)
          setMoviesDetails(movies)
                
        } catch (error) {
          console.log(error)
          console.log('бедося у тебя')
        }
        })()}

  }, [movietId])
  const { poster_path, genres, title, overview, vote_average } = moviesDetails
  let genresInfo
  if(genres){ genresInfo = genres.map(genre => { return genre.name }).slice(' ')}
 return (
          <div>
            <img src={`http://image.tmdb.org/t/p/w400/${poster_path}`} alt="" />
            <h2>{title}</h2>
            <p>User score: {vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Geners</h3>
            <p>{genresInfo}</p>
        </div>
    )
};


