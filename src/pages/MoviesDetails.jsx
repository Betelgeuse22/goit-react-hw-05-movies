import {
  useParams,
  useLocation,
  Link,
  NavLink,
  Outlet,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import noImage from '../images/no-image.jpg';

import { getMovieDetails } from '../Api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState();

  const location = useLocation();
  const goBack = location.state?.from ?? '/';

  useEffect(() => {
    const responce = getMovieDetails(id);
    responce
      .then()
      .then(resp => setMovieDetails(resp))
      .catch(error => console.log(error));
  }, [id]);

  if (!movieDetails) return;
  const { title, release_date, vote_average, genres, overview, poster_path } =
    movieDetails;

  const releaseDate = release_date.slice(0, 4);

  return (
    <div>
      <Link to={goBack}>Go back</Link>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : noImage
          }
          alt={title}
          width={240}
        />
        <div>
          <h2>
            {title} ({releaseDate})
          </h2>
          <p>
            User Score:&nbsp;
            {vote_average ? Math.fround(vote_average * 10).toFixed(0) : ''}%
          </p>
          <h3>Overview</h3>
          <p> {overview}</p>
          <h3>Genres</h3>
          <p>{genres ? genres.map(genre => genre.name).join(', ') : ''}</p>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <NavLink to="reviews" state={{ from: goBack }}>
              <p>Reviews</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="cast" state={{ from: goBack }}>
              <p>Cast</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
