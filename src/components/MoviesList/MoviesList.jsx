import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import noImage from '../../images/no-image.jpg';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id}>
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
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
