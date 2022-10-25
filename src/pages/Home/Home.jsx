import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrandings } from '../../API';

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
        // console.log('finaly');
      }
    }
    getTrends();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {trends.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
