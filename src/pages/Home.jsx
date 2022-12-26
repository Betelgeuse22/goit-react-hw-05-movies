import { getFetchMovies } from '../Api';
import { useState, useEffect } from 'react';
import { lazy } from 'react';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    getFetchMovies().then(data => setMoviesList(data));
  }, []);
  return (
    <main>
      <MoviesList movies={moviesList}></MoviesList>
    </main>
  );
};

export default Home;
