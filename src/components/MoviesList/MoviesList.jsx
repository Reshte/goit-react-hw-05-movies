
import { Link, useLocation } from "react-router-dom";

export const MoviesList = ({ movies, url }) => {

  const location = useLocation();
    console.log("list", location)
    
      return(
        <ul>
            {movies.map(({ id, title}) => (
              <li key={id}>
                <Link to={`${url}${id}`} state={{ from: location }}>
                  <h2>{title}</h2>
                </Link>
              </li>))}
        </ul>
    )
}

