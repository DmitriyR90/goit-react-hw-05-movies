import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Movies from '../pages/Movies/Movies';
import Home from '../pages/Home/Home';
import { MoviesDetails } from './MoviesDetails/MoviesDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MoviesDetails />} />
      </Route>
    </Routes>
  );
};
