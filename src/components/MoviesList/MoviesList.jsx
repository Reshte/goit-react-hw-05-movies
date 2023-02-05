
import { Link } from "react-router-dom";

export const MoviesList = ({ movies, url, query }) => {
   
      return(
        <ul>
            {movies.map(({ id, title}) => (
              <li key={id}>
                <Link to={`${url}${id}`} state={{ from: `${query}` }}>
                  <h2>{title}</h2>
                </Link>
              </li>))}
        </ul>
    )
}

export default MoviesList;