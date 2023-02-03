import { Container, StyledLink, Header } from './Layout.styled'
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/" end>Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

