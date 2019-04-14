import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import { closeSidedrawer } from '../actions';
import { ReactComponent as Logo } from '../svg/undraw_movie_night_93wl.svg';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5em;
  max-width: 425px;
  margin: 0 auto;

  a {
    text-decoration: none;
  }

  a .header-icon {
    color: white;
    font-size: 1.25em;
    cursor: pointer;
  }

  svg {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 600px) {
    max-width: 600px;
  }

  @media screen and (min-width: 600px) {
    padding: 0.5em 1.5em;

    a .header-icon {
      font-size: 1.75em;
    }

    svg {
      width: 50px;
      height: 50px;
    }
  }
`;

const Title = styled.h1`
  font-size: 1.25em;
  margin: 0;
  color: var(--green);

  @media screen and (min-width: 600px) {
    font-size: 2em;
`;

const Header = ({ headerText }) => {
  return (
    <HeaderContainer>
      {headerText !== 'Home' ? (
        <Link
          className="header-title"
          to="/"
          onClick={() => this.props.closeSidedrawer()}
        >
          <FontAwesomeIcon className="header-icon" icon={faHome} />
        </Link>
      ) : null}
      <Title>{headerText === 'Home' ? 'Movie Mania' : headerText}</Title>
      <Logo />
    </HeaderContainer>
  );
};

const mapStateToProps = state => {
  return {
    headerText: state.headerText
  };
};

export default connect(
  mapStateToProps,
  { closeSidedrawer }
)(Header);
