import { useLocation } from 'react-router-dom';
import { AddWrap, StyledLink } from './AddInfo.styled';

export const AddInfo = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <AddWrap>
      <p>Additional information</p>
      <ul>
        <li>
          <StyledLink to={'cast'} state={{ from: backLinkHref }}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to={'reviews'} state={{ from: backLinkHref }}>
            Reviews
          </StyledLink>
        </li>
      </ul>
    </AddWrap>
  );
};
