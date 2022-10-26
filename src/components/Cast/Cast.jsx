import { useEffect } from 'react';
import { getCasts } from 'API';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    async function getCastsInfo() {
      try {
        const response = await getCasts(id);

        if (response) {
          setCasts(response);
        }
      } catch {
        alert('Something went wrong. Try again');
      } finally {
      }
    }
    getCastsInfo(id);
  }, [id]);

  return (
    <ul>
      {casts.map(cast => {
        const { id, name, character, profile_path } = cast;

        return (
          <li key={id}>
            <img
              src={
                profile_path !== null
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : 'https://banffventureforum.com/wp-content/uploads/2019/08/no-photo-icon-22.png'
              }
              alt=""
              width="180px"
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
