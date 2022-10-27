import { getMovies } from 'API';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieWrap } from './Movies.styled';
import { MovieList } from 'components/MovieList/MovieList';
import { SearchForm } from '../../components/SearchForm/SearchForm';

const Movies = () => {
  const [searchParams] = useSearchParams('');
  const [findedMovies, setFindedMovies] = useState('');

  const query = searchParams.get('query');

  useEffect(() => {
    async function searchMovies() {
      try {
        if (!query) {
          return;
        }
        const response = await getMovies(query);

        if (response) {
          setFindedMovies(response.results);
        }
      } catch {
      } finally {
      }
    }
    searchMovies(query);
  }, [query]);

  return (
    <main>
      <MovieWrap>
        <SearchForm />
        {findedMovies && <MovieList movieList={findedMovies} />}
      </MovieWrap>
    </main>
  );
};

export default Movies;
