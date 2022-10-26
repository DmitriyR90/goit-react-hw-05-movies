import { MovieInfoWrap, MovieInfo } from './MovieInfoPath.styled';
import PropTypes from 'prop-types';

export const MovieInfoPath = ({ movie }) => {
  const year = movie.release_date.slice(0, 4);
  const title = movie.original_title;
  const score = Number.parseInt(movie.vote_average * 10);
  const genres = movie.genres.map(genre => genre.name).join(' ');

  return (
    <MovieInfoWrap>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt=""
        width="240px"
      />
      <MovieInfo>
        <h2>
          {title} ({year})
        </h2>
        <p>
          User Score:
          {score}%
        </p>
        <h3>Overview:</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>{genres}</p>
      </MovieInfo>
    </MovieInfoWrap>
  );
};

MovieInfoPath.propTypes = {
  movie: PropTypes.shape({
    release_date: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
