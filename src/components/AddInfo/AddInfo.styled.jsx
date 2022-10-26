import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AddWrap = styled.div`
  border-bottom: 2px solid grey;
  padding: 0 16px;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;

  :hover {
    color: orangered;
  }
`;
