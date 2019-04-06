import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getFeaturedCast } from '../helper';

const SubHeader = styled.h3`
  margin: 0;
  padding: 0.5em;
  color: var(--green);
  text-align: center;
  font-size: 1.25em;
`;

const CastContainer = styled.div`
  display: flex;
  overflow: scroll;
  padding: 1em 0;
`;

const CastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1em;

  .profile_photo {
    width: 150px;
    height: auto;
  }

  .name,
  .character {
    color: white;
    font-size: 0.85em;
    padding: 0.5em 0 0 0;
    margin: 0;
  }

  .character {
    color: lightgrey;
  }
`;

const DetailsCast = ({ cast }) => {
  const featuredCast = getFeaturedCast(cast);

  const featuredCastList = featuredCast.map(item => {
    return (
      <CastCard key={item.id}>
        <img
          className="profile_photo"
          src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
          alt={`Profile photo for ${item.name}`}
        />
        <p className="name">{item.name}</p>
        <p className="character">{item.character}</p>
      </CastCard>
    );
  });
  return (
    <div style={{ background: 'var(--black)' }}>
      <SubHeader>Featured Cast</SubHeader>
      <CastContainer>{featuredCastList}</CastContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cast: state.selectedMovieCredits.cast
  };
};

export default connect(mapStateToProps)(DetailsCast);
