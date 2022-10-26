import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieInfo } from '../../API';
import { MovieInfoPath } from 'components/MovieInfoPath/MovieInfoPath';
import { AddInfo } from '../AddInfo/AddInfo';
import { MovieWrap, BackBtn } from './MoviesDetails.styled';

const MoviesDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

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

  return (
    movie && (
      <main>
        <MovieWrap>
          <BackBtn to={backLinkHref}>&laquo; Go back</BackBtn>

          <MovieInfoPath movie={movie}></MovieInfoPath>
          <AddInfo />

          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </MovieWrap>
      </main>
    )
  );
};

export default MoviesDetails;
