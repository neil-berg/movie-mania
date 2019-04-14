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
  setSortKey,
  setSortText,
  openSortMenu,
  closeSortMenu
} from '../actions';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5em;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  .dropdown {
    transform: ${props =>
      props.sortMenuOpen ? 'rotateX(0)' : 'rotateX(90deg)'};
    transition: all 0.5s;
    overflow: ${props => (props.sortMenuOpen ? '' : 'hidden')};
    max-height: ${props => (props.sortMenuOpen ? '400px' : '0')};
  }
`;

const Button = styled.button`
  padding: 1em;
  width: 175px;
  display: block;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9em;
  background: transparent;
  border: 1px solid grey;
  border-top: ${props => (props.selected ? '1px grey solid' : '0')};
  color: ${props => (props.selected ? 'var(--yellow)' : 'white')};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: ${props => (props.selected ? 'space-between' : '')}

  .button-icon {
    font-size: 1.2em;
  }

  .button-text {
    margin-left 1.5em;
  }

  .button-text.selected {
    margin: 0;
  }

  :focus {
    outline: 0;
  }
`;

class SortMenu extends React.Component {
  componentDidMount() {
    this.props.closeSortMenu();
    this.props.setSortKey('popularity');
    this.props.setSortText('Most Popular');
  }
  toggleSortMenu = () => {
    this.props.sortMenuOpen
      ? this.props.closeSortMenu()
      : this.props.openSortMenu();
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

    let key = '';
    if (targetValue === 'Most Popular') {
      key = 'popularity';
    } else if (targetValue === 'Highest Rated') {
      key = 'vote_average';
    } else if (targetValue === 'Most Recent') {
      key = 'release_date';
    }
    this.props.setSortKey(key);
    this.props.setSortText(targetValue);
  };

  render() {
    return (
      <Wrapper>
        <MenuContainer
          sortMenuOpen={this.props.sortMenuOpen}
          onClick={this.handleClick}
        >
          <div className="selected" onClick={this.toggleSortMenu}>
            <Button selected>
              <span className="button-text selected">
                {this.props.sortText}
              </span>
              <FontAwesomeIcon
                className="button-icon"
                icon={
                  this.props.sortMenuOpen
                    ? faAngleDoubleRight
                    : faAngleDoubleDown
                }
              />
            </Button>
          </div>

          <div className="dropdown" onClick={() => this.props.closeSortMenu()}>
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faMedal} />
              <span className="button-text">Most Popular</span>
            </Button>
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faThumbsUp} />
              <span className="button-text">Highest Rated</span>
            </Button>
            <Button>
              <FontAwesomeIcon className="button-icon" icon={faCalendarAlt} />
              <span className="button-text">Most Recent</span>
            </Button>
          </div>
        </MenuContainer>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    sortMenuOpen: state.sortMenuOpen,
    sortText: state.sortText
  };
};

export default connect(
  mapStateToProps,
  { setSortKey, setSortText, openSortMenu, closeSortMenu }
)(SortMenu);
