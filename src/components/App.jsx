import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Home = lazy(() => import('../page/Home'))
const Movies = lazy(() => import('../page/Movie'));
const Cast = lazy(() => import('./cast/cast'));
const Reviews = lazy(() => import('./Review/review'));
const MovieDetails = lazy(() => import('../page/movieDetail'));

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/Movies">Movies</NavLink>
      </nav>
      <Suspense fallback="loading....">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
