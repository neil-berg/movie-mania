import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Backdrop = styled.div`
  height: 350px;
  background-image: url("https://image.tmdb.org/t/p/original${props =>
    props.imgPath}");
  background-position: center 25%;
  background-size: cover;
`;

const DetailsBackdrop = ({ movie }) => {
  return <Backdrop imgPath={movie.backdrop_path} />;
};

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie
  };
};

export default connect(mapStateToProps)(DetailsBackdrop);
