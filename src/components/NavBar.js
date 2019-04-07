import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSearch,
  faWindowClose
} from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  border-top: 1px grey solid;
  border-bottom: 1px grey solid;
  background: var(--black);
  padding: 0.75em;
  position: relative;

  .bars-icon,
  .search-icon {
    margin: 0;
    padding: 0 1em;
  }

  .bars-icon {
    @media screen and (min-width: 600px) {
      display: none;
    }
  }

  .sidedrawer {
    margin: 0;
    padding: 0;
    border: 1px red solid;
    height: 100vh;
    width: 80vw;
    background: var(--black);
    display: flex;
    z-index: 2;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${props => (props.sidedrawerOpen ? '' : 'translateX(-100%)')};
    transition: transform 0.3s ease-out;
  }
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: none;
  justify-content: center;

  @media screen and (min-width: 600px) {
    display: flex;
    margin: 0 auto;
  }
`;

const StyledLink = styled(Link)`
  margin: 0 1em;
  color: white;
  text-decoration: none;
  font-size: 0.9em;
  font-weight: bold;

  a {
    text-decoration: none;
  }
`;

class NavBar extends React.Component {
  state = {
    sidedrawerOpen: false
  };

  openSidedrawer = () => {
    this.setState({
      sidedrawerOpen: true
    });
  };

  closeSidedrawer = () => {
    this.setState({
      sidedrawerOpen: false
    });
  };

  render() {
    return (
      <Nav sidedrawerOpen={this.state.sidedrawerOpen}>
        <div className="bars-icon">
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            onClick={this.openSidedrawer}
          />
        </div>

        <ListContainer>
          <StyledLink to="/">Now Playing</StyledLink>
          <StyledLink to="/trending">Trending</StyledLink>
          <StyledLink to="/comingsoon">Coming Soon</StyledLink>
          <StyledLink to="/toprated">Top Rated</StyledLink>
        </ListContainer>

        <ul className="sidedrawer">
          <FontAwesomeIcon
            icon={faWindowClose}
            onClick={this.closeSidedrawer}
          />
          <StyledLink to="/" onClick={this.closeSidedrawer}>
            Now Playing
          </StyledLink>
          <StyledLink to="/trending" onClick={this.closeSidedrawer}>
            Trending
          </StyledLink>
          <StyledLink to="/comingsoon" onClick={this.closeSidedrawer}>
            Coming Soon
          </StyledLink>
          <StyledLink to="/toprated" onClick={this.closeSidedrawer}>
            Top Rated
          </StyledLink>
        </ul>

        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </Nav>
    );
  }
}

export default NavBar;
