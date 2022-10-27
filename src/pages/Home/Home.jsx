import { MovieList } from 'components/MovieList/MovieList';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTrandings } from '../../API';
import { TrendsWrap } from './Home.styled';

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function getTrends() {
      try {
        const response = await getTrandings();
        if (response) {
          setTrends(response);
        }
      } catch {
        alert('Something went wrong. Try again');
      } finally {
      }
    }
    getTrends();
  }, []);

  return (
    <main>
      <TrendsWrap>
        <h1>Trending Today</h1>
        <MovieList movieList={trends} />
      </TrendsWrap>
    </main>
  );
};

export default Home;
