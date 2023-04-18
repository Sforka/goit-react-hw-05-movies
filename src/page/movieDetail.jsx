import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { MovieDetailItem } from 'components/MovieDetailItems/movieDetailItems';
import { API } from 'services/Api';
import css from 'components/MovieDetailItems/movieDetail.module.css'
const api = new API();

const MovieDetails = () => {
  const [movie, setMovies] = useState([]);
    const { movieId } = useParams();
    const location = useLocation();
    const comeBack = location.state?.from ?? '/';

  useEffect(() => {
    const response = api.getById(movieId);
    response
      .then(res => {
        return setMovies(movie => res.data);
      })
      .catch(error => alert(error));
  }, [movieId]);
    return (
      <>
        <Link to={comeBack}>
          <button type="button">Go back</button>
        </Link>
        <div className={css.movieDetails}>
          <img
            src={'https://image.tmdb.org/t/p/w300' + movie.backdrop_path}
            alt={movie.name || movie.title}
          />
          <MovieDetailItem
            overview={movie.overview}
            name={movie.name}
            title={movie.title}
            score={movie.popularity}
            genres={movie.genres}
          />
        </div>
        <div className={css.movieInfo}>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast" state={{ from: comeBack }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: comeBack }}>
                Reviews
              </Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<>...</>}>
            <Outlet />
          </Suspense>
        </div>
      </>
    );
};

export default MovieDetails;
