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
`;

const Title = styled.h1`
  font-size: 1.25em;
  margin: 0;
  color: var(--green);
`;

const Header = ({ section }) => {
  return (
    <HeaderContainer>
      {section !== 'Home' ? (
        <Link
          className="header-title"
          to="/"
          onClick={() => this.props.closeSidedrawer()}
        >
          <FontAwesomeIcon className="header-icon" icon={faHome} />
        </Link>
      ) : null}
      <Title>{section === 'Home' ? 'Movie Mania' : section}</Title>
      <Logo className="header-svg" style={{ width: 50, height: 50 }} />
    </HeaderContainer>
  );
};

const mapStateToProps = state => {
  return {
    section: state.section
  };
};

export default connect(
  mapStateToProps,
  { closeSidedrawer }
)(Header);
