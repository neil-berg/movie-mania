import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMedal,
  faThumbsUp,
  faCalendarAlt,
  faAngleDoubleDown
} from '@fortawesome/free-solid-svg-icons';

import { setSortKey, openSortMenu, closeSortMenu } from '../actions';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 1em 2em;
  width: 215px;
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
`;

class SortMenu extends React.Component {
  handleClick = e => {
    // Store the sortKey and longname in storeState
    const targetValue = e.target.textContent;
    let key = '';
    if (targetValue === 'Most Popular') {
      key = 'popularity';
    } else if (targetValue === 'Highest Rated') {
      key = 'vote_average';
    } else if (targetValue === 'Most Recent') {
      key = 'release_date';
    }
    this.props.setSortKey(key);
  };

  render() {
    return (
      <Wrapper>
        <MenuContainer
          sortMenuOpen={this.props.sortMenuOpen}
          onClick={this.handleClick}
        >
          <div className="selected" onClick={() => this.props.openSortMenu()}>
            <Button selected>
              <span className="button-text selected">
                {this.props.sortText}
              </span>
              <FontAwesomeIcon
                className="button-icon"
                icon={faAngleDoubleDown}
              />
            </Button>
          </div>

          <div className="dropdown">
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
  { setSortKey, openSortMenu, closeSortMenu }
)(SortMenu);
