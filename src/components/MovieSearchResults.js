import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieSearchResults extends React.Component {
  render() {
    return (
      <div>
        <p style={{ color: 'white' }}>Search Results</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchValue: state.searchValue
  };
};

export default connect(mapStateToProps)(MovieSearchResults);
