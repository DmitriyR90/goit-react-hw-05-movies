import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderStyled, Link } from './Header.styled';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </HeaderStyled>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
