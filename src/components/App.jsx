import { lazy } from "react";
import { Routes, Route } from "react-router-dom"
import { Layout } from 'components/Layout/Layout';


const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MoviesDetails = lazy(() => import("../pages/MoviesDetails"));
const Reviews = lazy(() => import("../components/Reviews/Reviews"));
const Cast = lazy(() => import("../components/Cast/Cast"));


export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />}/>
        <Route path='movies'element={<Movies/>}/>
        <Route path='movies/:movieId' element={<MoviesDetails />}> 
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
       <Route path='*' element={<Home replace/>}/> 
      </Route>
    </Routes>
   
  );
};


