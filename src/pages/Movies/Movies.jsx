import { getMovies } from 'API';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MovieWrap, Form, Input, Button, StyledLink } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams('');
  const [movieList, setMovieList] = useState('');
  const location = useLocation();

  const query = searchParams.get('query');

  useEffect(() => {
    async function searchMovies() {
      try {
        if (!query) {
          return;
        }
        const response = await getMovies(query);

        if (response) {
          setMovieList(response.results);
        }
      } catch {
      } finally {
      }
    }
    searchMovies(query);
  }, [query]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target[0].value });
  };

  return (
    <main>
      <MovieWrap>
        <Form onSubmit={onFormSubmit}>
          <Input type="text" name="query" defaultValue={query} />
          <Button type="submit">Search</Button>
        </Form>

        {movieList && (
          <div>
            <ul>
              {movieList.map(movie => {
                return (
                  <li key={movie.id}>
                    <StyledLink to={`${movie.id}`} state={{ from: location }}>
                      {movie.original_title}
                    </StyledLink>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </MovieWrap>
    </main>
  );
};

export default Movies;
