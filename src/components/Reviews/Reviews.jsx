import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getReviews } from '../../Api';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    getReviews(id).then(resp => setReviews(resp.results));
  }, [id]);
  if (!reviews) return;

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>"{content}"</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any review for this movie</p>
  );
};
