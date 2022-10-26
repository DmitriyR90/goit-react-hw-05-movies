import axios from 'axios';
const API_KEY = '5dfa5b901aee38fd7ab0c698d7fb5f4c';

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
};

export const getCasts = async id => {
  const url = `/movie/${id}/credits?api_key=${API_KEY}`;
  const response = await axios.get(url);

  return response.data.cast;
};

export const getRewiews = async id => {
  const url = `/movie/${id}/reviews?api_key=${API_KEY}`;
  const response = await axios.get(url);

  return response.data;
};

export const getMovies = async query => {
  const url = `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`;

  const response = await axios.get(url);

  return response.data;
};
