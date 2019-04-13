import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExclamationTriangle,
  faHiking,
  faPencilAlt,
  faCalendarAlt,
  faTheaterMasks,
  faLaughSquint,
  faDragon,
  faMusic,
  faVideo,
  faUserSecret,
  faUsers,
  faUserAstronaut,
  faHeart,
  faSearchLocation,
  faShoePrints,
  faSkull,
  faAngleDoubleDown,
  faAngleDoubleRight
} from '@fortawesome/free-solid-svg-icons';

import {
  openGenreMenu,
  closeGenreMenu,
  setGenreKey,
  setGenreText
} from '../actions';
import { getGenreKey } from '../helper';

const MenuContainer = styled.div`
  margin: 1em 0;

  .dropdown {
    display: grid;
    grid-template-columns: ${props =>
      props.genreMenuOpen ? 'repeat(3, 115px)' : '175px'};
    justify-content: center;
    transform: ${props =>
      props.genreMenuOpen ? 'rotateX(0)' : 'rotateX(90deg)'};
    transition: all 0.5s;
    overflow: ${props => (props.genreMenuOpen ? '' : 'hidden')};
    max-height: ${props => (props.genreMenuOpen ? '400px' : '0')};

    a {
      text-decoration: none;
    }
  }
`;

const SelectedButton = styled.button`
  width: ${props => (props.genreMenuOpen ? '345px' : '175px')};
  padding: 1em;
  margin: 0 auto;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9em;
  background: transparent;
  border: 1px solid grey;
  color: var(--yellow);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.genreMenuOpen ? 'center' : 'space-between'};
  transition: all 0.3s;

  .selected-text {
    padding-right: 1.5em;
  }

  .selected-icon {
    font-size: 1.2em;
  }

  :focus {
    outline: 0;
  }
`;

const Button = styled.button`
  padding: 1em;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9em;
  background: transparent;
  border: 1px solid grey;
  border-top: ${props => (props.selected ? '1px grey solid' : '0')};
  color: ${props => (props.selected ? 'var(--yellow)' : 'white')};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  .button-icon {
    font-size: 1.2em;
  }

  .button-text {
    padding-top: 0.5em;
  }

  :focus {
    outline: 0;
  }
`;

class GenreMenu extends React.Component {
  componentDidMount() {
    this.props.closeGenreMenu();
  }
  toggleGenreMenu = () => {
    this.props.genreMenuOpen
      ? this.props.closeGenreMenu()
      : this.props.openGenreMenu();
  };
  handleClick = e => {
    // Store the sortKey and longname in storeState
    const nodeName = e.target.nodeName;
    let targetValue = '';
    if (nodeName === 'BUTTON') {
      targetValue = e.target.innerText;
    } else if (nodeName === 'svg' || nodeName === 'SPAN') {
      targetValue = e.target.parentElement.innerText;
    } else if (nodeName === 'path') {
      targetValue = e.target.parentElement.parentElement.innerText;
    }

    const key = getGenreKey(targetValue.toLowerCase());
    this.props.setGenreKey(key);
    this.props.setGenreText(targetValue.toLowerCase());
    this.props.closeGenreMenu();
  };

  render() {
    return (
      <MenuContainer genreMenuOpen={this.props.genreMenuOpen}>
        <SelectedButton
          genreMenuOpen={this.props.genreMenuOpen}
          onClick={this.toggleGenreMenu}
        >
          <span className="selected-text">
            {this.props.genreText[0].toUpperCase() +
              this.props.genreText.slice(1)}
          </span>
          <FontAwesomeIcon
            className="selected-icon"
            icon={
              this.props.genreMenuOpen ? faAngleDoubleRight : faAngleDoubleDown
            }
          />
        </SelectedButton>

        <div className="dropdown" onClick={this.handleClick}>
          <Link to="/toprated/action/page-1">
            <Button>
              <FontAwesomeIcon
                className="button-icon"
                icon={faExclamationTriangle}
              />
              <span className="button-text">Action</span>
            </Button>
          </Link>
          <Link to="/toprated/adventure/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faHiking} />
              <span className="button-text">Adventure</span>
            </Button>
          </Link>
          <Link to="/toprated/animation/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faPencilAlt} />
              <span className="button-text">Animation</span>
            </Button>
          </Link>
          <Link to="/toprated/comedy/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faLaughSquint} />
              <span className="button-text">Comedy</span>
            </Button>
          </Link>
          <Link to="/toprated/crime/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faShoePrints} />
              <span className="button-text">Crime</span>
            </Button>
          </Link>
          <Link to="/toprated/documentary/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faVideo} />
              <span className="button-text">Documentary</span>
            </Button>
          </Link>
          <Link to="/toprated/drama/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faTheaterMasks} />
              <span className="button-text">Drama</span>
            </Button>
          </Link>
          <Link to="/toprated/family/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faUsers} />
              <span className="button-text">Family</span>
            </Button>
          </Link>
          <Link to="/toprated/fantasy/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faDragon} />
              <span className="button-text">Fantasy</span>
            </Button>
          </Link>
          <Link to="/toprated/horror/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faSkull} />
              <span className="button-text">Horror</span>
            </Button>
          </Link>
          <Link to="/toprated/music/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faMusic} />
              <span className="button-text">Music</span>
            </Button>
          </Link>
          <Link to="/toprated/mystery/page-1">
            <Button>
              <FontAwesomeIcon
                className="button-icon"
                icon={faSearchLocation}
              />
              <span className="button-text">Mystery</span>
            </Button>
          </Link>
          <Link to="/toprated/romance/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faHeart} />
              <span className="button-text">Romance</span>
            </Button>
          </Link>
          <Link to="/toprated/scifi/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faUserAstronaut} />
              <span className="button-text">SciFi</span>
            </Button>
          </Link>
          <Link to="/toprated/thriller/page-1">
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faUserSecret} />
              <span className="button-text">Thriller</span>
            </Button>
          </Link>
        </div>
      </MenuContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    genreMenuOpen: state.genreMenuOpen,
    genreText: state.genreText
  };
};

export default connect(
  mapStateToProps,
  {
    openGenreMenu,
    closeGenreMenu,
    setGenreKey,
    setGenreText
  }
)(GenreMenu);
