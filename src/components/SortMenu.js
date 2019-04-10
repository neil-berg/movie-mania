import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { setSortKey } from '../actions';

class SortMenu extends React.Component {
  state = {
    section: '',
    sortOption: 'Most Popular'
  };

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
      <div>
        <ul onClick={this.handleClick} style={{ color: 'white' }}>
          <li>Most Popular</li>
          <li>Most Popular</li>
          <li>Highest Rated</li>
          <li>Most Recent</li>
        </ul>
      </div>
    );
  }
}

export default connect(
  null,
  { setSortKey }
)(SortMenu);
