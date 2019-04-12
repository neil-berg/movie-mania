import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMedal,
  faThumbsUp,
  faCalendarAlt,
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
    grid-template-columns: repeat(3, 115px);
    justify-content: center;
  }
`;

const SelectedButton = styled.button`
  width: 345px;
  padding: 1em;
  margin: 0 auto;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9em;
  background: transparent;
  border: 1px solid grey;
  border-top: ${props => (props.selected ? '1px grey solid' : '0')};
  color: ${props => (props.selected ? 'var(--yellow)' : 'white')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  .selected-text {
    padding-right: 1.5em;
  }

  .selected-icon {
    font-size: 1.2em;
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
    //this.props.closeSortMenu();
    // this.props.setSortKey('popularity');
    // this.props.setSortText('Most Popular');
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

    const key = getGenreKey(targetValue);
    this.props.setGenreKey(key);
    this.props.setGenreText(targetValue);
  };

  render() {
    return (
      <MenuContainer genreMenuOpen={this.props.genreMenuOpen}>
        <SelectedButton selected>
          <span className="selected-text">{this.props.genreText}</span>
          <FontAwesomeIcon className="selected-icon" icon={faAngleDoubleDown} />
        </SelectedButton>

        <div className="dropdown" onClick={this.handleClick}>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faMedal} />
            <span className="button-text">Action</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faThumbsUp} />
            <span className="button-text">Adventure</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">Animation</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">Comedy</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">Crime</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">Documentary</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">Drama</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">Family</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">Fantasy</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">Horror</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">Music</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">Mystery</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">Romance</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">SciFi</span>
          </Button>
          <Button>
            <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
            <span className="button-text">Thriller</span>
          </Button>
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
