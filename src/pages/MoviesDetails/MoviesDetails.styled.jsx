import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieWrap = styled.div`
  padding: 16px 32px;
`;

export const BackBtn = styled(Link)`
  text-decoration: none;
  display: inline-block;
  border-radius: 6px;
  border: 1px solid #ddd;
  padding: 8px 16px;
  background-color: #f1f1f1;
  color: black;
  margin: 6px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;
