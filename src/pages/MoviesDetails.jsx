import { useParams } from "react-router-dom";
import { getMovieDetails} from "../components/servises/Fetch"

export const MoviesDetails = () => {
    const { movietId } = useParams();
    console.log( movietId)
    const  movie = getMovieDetails(movietId);
  return <div>Now showing product with id - { movietId}</div>;
};


