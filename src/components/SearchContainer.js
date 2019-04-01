import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SearchBar from './SearchBar';

class SearchContainer extends React.Component {
  handleSubmit = () => {
    const movie = this.props.movie;
    const title = movie.values.title.replace(/\s/, '+');
    console.log(title);
    //this.props.fetchMovie(title);
    //this.props.history.push(`/search/${title}`);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.form.movie
  };
};

export default connect(mapStateToProps)(SearchContainer);
