import { Wrapper,StyledLink, Header } from './App.styled'
import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import {MoviesDetails} from '../pages/MoviesDetails'
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
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
};
