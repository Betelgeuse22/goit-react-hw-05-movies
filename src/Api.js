import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0766ad1a9e2f3e7f7c2322da00176fb0';

export const getFetchMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return response.data.results.map(({ id, title, poster_path }) => {
    return { id, title, poster_path };
  });
};

export const getSearchMovies = async searchValue => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchValue}&language=en-US&page=1`
  );
  return response.data.results.map(({ id, title, poster_path }) => {
    return { id, title, poster_path };
  });
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

export const getReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
