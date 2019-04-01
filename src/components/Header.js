import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../svg/undraw_movie_night_93wl.svg';

const Wrapper = styled.header`
  display: flex;
  padding: 0.15em 0;
  max-width: 750px;
  margin: 0 auto;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  height: 100px;

  a {
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
  padding: 0.25em 0 0 0;
  color: var(--green);
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  margin: 0 1em;
  padding-bottom: 0.75em;
  color: white;
  text-decoration: none;

  a {
    text-decoration: none;
  }
`;

const Header = () => {
  return (
    <header style={{ background: 'var(--black)' }}>
      <Wrapper>
        <Logo style={{ width: 100, height: 100, marginLeft: '1em' }} />
        <RightContainer>
          <Link to="/">
            <Title>Movie Mania</Title>
          </Link>

          <ListContainer>
            <StyledLink to="/">Now Playing</StyledLink>
            <StyledLink to="/trending">Trending</StyledLink>
            <StyledLink to="/upcoming">Coming Soon</StyledLink>
            <StyledLink to="/toprated">Top Rated</StyledLink>
          </ListContainer>
        </RightContainer>
      </Wrapper>
    </header>
  );
};

export default Header;
