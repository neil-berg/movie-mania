import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from './undraw_movie_night_93wl.svg';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin: 0;
  padding: 0;
  border: 1px red solid;
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ccc;
`;

const StyledLink = styled(Link)`
  margin: 1em;
`;

const Header = () => {
  return (
    <header style={{ padding: 0 }}>
      <Title>Movie Mania</Title>
      <ListContainer>
        <Logo style={{ width: 100, height: 100 }} />
        <StyledLink to="/">Now Playing</StyledLink>
        <StyledLink to="/toprated">Top Rated</StyledLink>
        <StyledLink to="/upcoming">Coming Soon</StyledLink>
        <StyledLink to="/trending">Trending</StyledLink>
      </ListContainer>
    </header>
  );
};

export default Header;
