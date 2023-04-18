import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API } from 'services/Api';
const Api= new API();

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

 useEffect(() => {
   const response = Api.getReview(movieId);
   response
     .then(res => {
       console.log(res);
       return setReviews(movie => res.data.results);
     })
     .catch(error => alert(error));
 }, [movieId]);

  return (
    <>
      {reviews.length !== 0 && (
        <div>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <h2>Author: {review.author}</h2>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;
