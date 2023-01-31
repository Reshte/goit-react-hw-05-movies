
import { Link } from "react-router-dom";



export const MoviesList = ({movies, url}) => {
   
      return(
        <ul>
            {movies.map(({ id, title}) => (
              <li key={id}>
                <Link to={`${url}${id}`}>
                  <h2>{title}</h2>
                </Link>
              </li>))}
        </ul>
    )
}

