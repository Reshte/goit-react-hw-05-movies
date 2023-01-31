import { Wrapper,StyledLink, Header } from './App.styled'
import { Routes, Route } from "react-router-dom"
// import { Layout } from 'components/Layout/Layout';
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MoviesDetails } from '../pages/MoviesDetails'
import { NotFound } from "../pages/NotFound";


export const App = () => {
  return (
    <Wrapper>
      <Header>
        <nav>
        <StyledLink to="/" end>Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
         </nav>
       </Header>
      
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movietId" element={<MoviesDetails />}>
            {/* <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} /> */}
          </Route>
          <Route path='*' element={<NotFound to="/" replace/>}/> 
       
      </Routes>
    </Wrapper>
  );
};
