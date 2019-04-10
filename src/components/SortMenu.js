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

import { setSortKey } from '../actions';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuContainer = styled.div`
  margin-top: 1em;
`;

const Button = styled.button`
  padding: 1em 2em;
  width: 215px;
  display: block;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 0.9em;
  background: transparent;
  border: none;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  color: ${props => (props.selected ? 'var(--yellow)' : 'white')};
  cursor: pointer;
  display: flex;
  align-items: center;

  :first-child {
    justify-content: space-between;
  }
  :last-child {
    border-bottom: 1px solid grey;
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
        <MenuContainer onClick={this.handleClick}>
          <Button selected>
            <span className="button-text selected">Most Popular</span>
            <FontAwesomeIcon icon={faAngleDoubleDown} size="lg" />
          </Button>

          <Button>
            <FontAwesomeIcon icon={faMedal} size="lg" />
            <span className="button-text">Most Popular</span>
          </Button>

          <Button>
            <FontAwesomeIcon icon={faThumbsUp} size="lg" />
            <span className="button-text">Highest Rated</span>
          </Button>

          <Button>
            <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
            <span className="button-text">Most Recent</span>
          </Button>
        </MenuContainer>
      </Wrapper>
    );
  }
}

export default connect(
  null,
  { setSortKey }
)(SortMenu);
