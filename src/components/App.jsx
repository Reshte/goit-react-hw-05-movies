import { Routes, Route} from "react-router-dom"
import { Layout } from 'components/Layout/Layout';
import { lazy } from "react";
// import { Home } from '../pages/Home'
// import { Movies } from '../pages/Movies'
// import { MoviesDetails } from '../pages/MoviesDetails'
// import { Reviews } from "./Reviews/Reviews"
// import { Cast } from './Cast/Cast'


const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MoviesDetails = lazy(() => import('pages/MoviesDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));


export const App = () => {
  return (    
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home />} />
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


