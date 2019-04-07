import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faSearch,
  faTimes,
  faAngleDoubleRight
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
`;

const Sidedrawer = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  border: 1px grey solid;
  height: 100vh;
  width: 80vw;
  background: linear-gradient(to bottom, var(--blue) 20%, var(--black));
  display: flex;
  z-index: 2;
  flex-direction: column;
  align-items: start;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${props => (props.sidedrawerOpen ? '' : 'translateX(-100%)')};
  transition: transform 0.3s ease-out;

  .sidedrawer__item {
    border-bottom: 1px var(--black) solid;
    width: 100%;
    font-size: 1.25em;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .sidedrawer__item:first-child {
    padding: 1em;
    display: flex;
    justify-content: flex-end;
    color: var(--yellow);
  }

  .sidedrawer__item a {
    color: white;
    padding: 1em;
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  .sidedrawer__item .link__text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s ease-in;
  }

  .sidedrawer__item .link__text:hover {
    color: var(--yellow);
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
    sidedrawerOpen: true
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
          <FontAwesomeIcon icon={faBars} onClick={this.openSidedrawer} />
        </div>

        <ListContainer>
          <StyledLink to="/">Now Playing</StyledLink>
          <StyledLink to="/trending">Trending</StyledLink>
          <StyledLink to="/comingsoon">Coming Soon</StyledLink>
          <StyledLink to="/toprated">Top Rated</StyledLink>
        </ListContainer>

        <Sidedrawer
          className="sidedrawer"
          sidedrawerOpen={this.state.sidedrawerOpen}
        >
          <li className="sidedrawer__item">
            <FontAwesomeIcon
              className="icon-close"
              icon={faTimes}
              onClick={this.closeSidedrawer}
            />
          </li>
          <li className="sidedrawer__item">
            <Link to="/" onClick={this.closeSidedrawer}>
              <div className="link__text">
                <span>Now Playing</span>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </div>
            </Link>
          </li>
          <li className="sidedrawer__item">
            <Link to="/trending" onClick={this.closeSidedrawer}>
              <div className="link__text">
                <span>Trending</span>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </div>
            </Link>
          </li>
          <li className="sidedrawer__item">
            <Link to="/comingsoon" onClick={this.closeSidedrawer}>
              <div className="link__text">
                <span>Coming Soon</span>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </div>
            </Link>
          </li>
          <li className="sidedrawer__item">
            <Link to="/toprated" onClick={this.closeSidedrawer}>
              <div className="link__text">
                <span>Top Rated</span>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </div>
            </Link>
          </li>
        </Sidedrawer>

        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </Nav>
    );
  }
}

export default NavBar;
