import { API } from 'services/Api';
import { Gallery } from 'components/Gallery/Gallery';
import { useEffect, useState } from 'react';

const api = new API();
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api
      .getTrending()
      .then(res => {
        res.data.results.map(({ id, name, title, backdrop_path }) => {
          return (
            !movies.some(movie => movie.id === id) &&
            setMovies(movies => [...movies, { id, name, title, backdrop_path }])
          );
        });
      })
      .catch(error => alert(error));
  }, [movies]);

  return <Gallery movies={movies} />;
};
export default Home;
