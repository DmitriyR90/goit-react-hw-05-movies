import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;

  padding: 16px 32px;

  color: black;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  > nav {
    display: flex;
    gap: 16px;
  }
`;

export const Link = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: black;
  font-weight: 700;

  &.active {
    color: orangered;
  }
`;
