import { GlobalStyle } from '../../GlobaleStyle';
import { Suspense } from 'react';
import {Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { Container, StyledLink, NavWraper } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <NavWraper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </NavWraper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
    </Container>
  );
};
