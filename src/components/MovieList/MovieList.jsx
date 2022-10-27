import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './MovieList.styled';

export const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <ul>
      {movieList.map(item => {
        return (
          <li key={item.id}>
            <StyledLink to={`/movies/${item.id}`} state={{ from: location }}>
              {item.title}
            </StyledLink>
          </li>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
