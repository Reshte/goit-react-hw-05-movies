import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f983fc840eb543faba07dcbe6db19b0b';

export const getPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=1`
  );
  const movies = response.data.results;
  return movies;
};

// `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`
