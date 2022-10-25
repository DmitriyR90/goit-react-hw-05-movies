import axios from 'axios';
const API_KEY = '5dfa5b901aee38fd7ab0c698d7fb5f4c';

// https://api.themoviedb.org/3/trending/movie/day?api_key=5dfa5b901aee38fd7ab0c698d7fb5f4c

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const PER_PAGE = 12;

export const getTrandings = async () => {
  const url = `/trending/movie/day?api_key=${API_KEY}`;
  const response = await axios.get(url);

  return response.data.results;
};

export const getMovieInfo = async id => {
  const url = `/movie/${id}?api_key=${API_KEY}`;
  const response = await axios.get(url);

  return response.data;
  //   console.log(response.data);
};

/*
about film:
https://api.themoviedb.org/3/movie/619730?api_key=5dfa5b901aee38fd7ab0c698d7fb5f4c
*/
