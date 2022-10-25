import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieInfo } from '../../API';
import { Link } from 'react-router-dom';

export const MoviesDetails = () => {
  const { id } = useParams();
  let year;
  let title;
  let score;
  let genres;
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const response = await getMovieInfo(id);
        setMovie(response);
      } catch {
      } finally {
      }
    }
    getMovieDetails(id);
  }, [id]);

  if (movie) {
    year = movie.release_date.slice(0, 4);
    title = movie.original_title;
    score = movie.vote_average;
    genres = movie.genres.map(genre => genre.name);
  }

  //   console.log(movie.release_date.slice(0, 4));
  console.log(year);
  return (
    movie && (
      <div>
        <Link to={backLinkHref}>Go back</Link>
        <h2>
          {title} ({year})
        </h2>
        <p>User Score: {score}</p>
        <h3>Overview:</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>{genres}</p>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
      </div>
    )
  );
};
