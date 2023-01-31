import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f983fc840eb543faba07dcbe6db19b0b';

export const getPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=1&language=en-US`
  );
  const movies = response.data.results;
  return movies;
};

export const getMovies = async searchQuery => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchQuery}`
  );
  const movies = response.data.results;
  return movies;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  const details = response.data;
  return details;
};

export const getMovieCredits = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const credits = response.data.results;
  return credits;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const reviews = response.data.results;
  return reviews;
};
