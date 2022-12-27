import { useSearchParams } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { getSearchMovies } from '../../Api';
import { Loader } from '../Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { Input, SearchBtn, SearchForm } from './SearchBox.styled';

import 'react-toastify/dist/ReactToastify.css';

const MoviesList = lazy(() => import('components/MoviesList/MoviesList'));

const SearchBox = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const toastOptions = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target[0].value === '') {
      toast.info('Enter search value', toastOptions);
      return;
    }
    return setSearchParams({ query: e.target[0].value.toLowerCase() });
  };

  useEffect(() => {
    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      getSearchMovies(movieTitle).then(resp => setMovies(resp));
    }
  }, [searchParams]);

  return (
    <div>
      <SearchForm  onSubmit={handleSubmit}>
        <Input type="text" name="searchName" placeholder="Search movie" />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>

      {movies.length > 0 && (
        <Suspense fallback={<Loader />}>
          <MoviesList movies={movies} />
        </Suspense>
      )}
      <ToastContainer />
    </div>
  );
};

export default SearchBox;
