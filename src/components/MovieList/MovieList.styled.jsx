import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;

  :hover {
    color: orangered;
  }
`;
