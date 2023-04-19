import { SearchBar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Gallery } from 'components/Gallery/Gallery';
import { API } from 'services/Api';
import { useSearchParams } from 'react-router-dom';

const api = new API();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  useEffect(() => {
    
    if (searchQuery === null || searchQuery === '') {
      return;
    }
    const response = api.getSearchMovie(searchQuery);
    response
      .then(res => {
        if (res.data.results.length === 0) {
          toast.error('Nothing found for your search');
          return
        }
        res.data.results.map(({ id, name, title, backdrop_path }) => {
          return (
            !movies.some(movie => movie.id === id) &&
            setMovies(movies => [...movies, { id, name, title, backdrop_path }])
          );
        });
      })
      .catch(error => alert(error));
  }, [movies, searchQuery]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setMovies([]);
  setSearchParams(nextParams);
  
};

  return (
    <>
      <SearchBar value={searchQuery} onSubmit={updateQueryString} />
      <Gallery movies={movies} />
      {movies.length === 0 && (
        <div>We don't have any reviews for this movie</div>
      )}
      <ToastContainer />
    </>
  );
};
export default Movies;
