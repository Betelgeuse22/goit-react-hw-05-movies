import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import noImage from '../../images/no-image.jpg';
import { FilmList, FilmItem } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <FilmList>
      {movies.map(({ id, title, poster_path }) => (
        <FilmItem key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : noImage
              }
              alt={title}
              width={250}
              height={330}
            />
            <p>{title}</p>
          </Link>
        </FilmItem>
      ))}
    </FilmList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
