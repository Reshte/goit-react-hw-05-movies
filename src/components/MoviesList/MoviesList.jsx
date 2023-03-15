
import{ Wrapper, CardWrapper , Poster, MovieName, Link } from './MoviesList.styled'

export const MoviesList = ({ movies, url, query }) => {
   console.log(movies)
      return(
        <Wrapper>
            {movies.map(({ id, title, poster_path}) => (
              <CardWrapper key={id}>
                <Link  to={`${url}${id}`} state={{ from: `${query}` }}>
                  <Poster src={`http://image.tmdb.org/t/p/w400/${poster_path}`} alt="poster" />
                  <MovieName>{title}</MovieName>
                </Link>
              </CardWrapper>))}
        </Wrapper>
    )
}

export default MoviesList;