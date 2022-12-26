import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCast } from '../../Api';
import noImage from '../../images/no-image.jpg';

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    getCast(id).then(resp => setCast(resp.cast));
  }, [id]);
  if (!cast) return;

  return (
    <ul>
      {cast.map(({ cast_id, profile_path, name, character }) => (
        <li key={cast_id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : noImage
            }
            alt={name}
            width={100}
            height={150}
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
