import { Suspense, useEffect } from 'react';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getTrandings } from '../../API';
import { TrendsWrap, StyledLink } from './Home.styled';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const location = useLocation();

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

        <ul>
          {trends.map(item => {
            return (
              <li key={item.id}>
                <StyledLink
                  to={`/movies/${item.id}`}
                  state={{ from: location }}
                >
                  {item.title}
                </StyledLink>
              </li>
            );
          })}
        </ul>
      </TrendsWrap>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Home;
