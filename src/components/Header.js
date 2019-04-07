import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../svg/undraw_movie_night_93wl.svg';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
  padding: 0 1em;
  color: var(--green);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo style={{ width: 100, height: 100, marginLeft: '1em' }} />
      <Link to="/">
        <Title>Movie Mania</Title>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
