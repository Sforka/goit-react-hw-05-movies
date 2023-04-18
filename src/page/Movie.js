import { SearchBar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Gallery } from 'components/Gallery/Gallery';
import { API } from 'services/Api';

const api = new API();

const Movies = () => {
  const [inputSearch, setInputSearch] = useState('');
  const [movies, setMovies] = useState([]);
  

  useEffect(() => { 
    const response = api.getSearchMovie(inputSearch);
    response
      .then(res => {
        res.data.results.map(({ id, name, title, backdrop_path }) => {
          return (
            !movies.some(movie => movie.id === id) &&
            setMovies(movies => [...movies, { id, name, title, backdrop_path }])
          );
        });
      })
      .catch(error => alert(error))
  }, [inputSearch, movies]);


  
  const searchSubmit = inputValue => {
    if (inputValue === inputSearch) {
      return toast.warn(
        'This request has already been found, please try another quary'
      );
    }
    setInputSearch(inputValue);
    setMovies([])
  };

  return (
    <div>
      <SearchBar onSubmit={searchSubmit} />
      <Gallery movies={movies} />
      <ToastContainer />
    </div>
  );
};
export default Movies;
