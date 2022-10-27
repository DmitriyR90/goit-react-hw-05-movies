import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  margin: 0;
  padding: 2px 8px;
  border: 1px solid #66666650;
  border-radius: 6px;
  font-size: 24px;
`;

export const Button = styled.button`
  background-color: #e7e7e7;
  color: black;
  border: none;
  border-radius: 6px;
  height: 34px;
  padding: 0 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
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
