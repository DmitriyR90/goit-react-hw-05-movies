import { useEffect } from 'react';
import { getRewiews } from 'API';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewWrap } from './Reviews.styled';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  let totalResults = reviews.length;

  useEffect(() => {
    async function getAllRewiews() {
      try {
        const response = await getRewiews(id);

        if (response) {
          setReviews(response.results);
        }
      } catch {
        alert('Something went wrong. Try again');
      } finally {
      }
    }
    getAllRewiews(id);
  }, [id]);

  return (
    <ReviewWrap>
      {totalResults !== 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ReviewWrap>
  );
};

export default Reviews;
