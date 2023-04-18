import axios from 'axios';
const KEY_API = '3adc469534739232a382da2060386ef5';
export class API {
  getTrending = () => {
    const response = axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${KEY_API}`
    );
    return response;
  };
  getById = (id) => {
    const response = axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY_API}`
    );
    return response;
  };

  getSearchMovie = (SearchValue) => {
    const response = axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY_API}&language=en-US&query=${SearchValue}&page=1`
    );
    return response;
  }
  getCredits = (id) => {
    const response = axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY_API}&language=en-US`
    );
    return response;
  }
  getReview = (id) => {
    const response = axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY_API}&language=en-US&page=1`
    );
    return response
  }
 
}
