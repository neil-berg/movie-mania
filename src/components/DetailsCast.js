import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { getFeaturedCast } from '../helper';

const SubHeader = styled.h3`
  margin: 0;
  padding: 1em 0em 0.5em 1em;
  color: var(--green);
  text-align: left;
  font-size: 1.2em;
  font-weight: 400;

  @media screen and (min-width: 450px) {
    text-align: center;
  }
`;

const CastContainer = styled.div`
  display: flex;
  overflow: scroll;
  padding: 1em 0;

  @media screen and (min-width: 450px) {
    justify-content: space-between;
  }
`;

const CastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1em;

  .profile_photo {
    width: 125px;
    height: auto;
    flex-basis: 187.5px;
  }

  .name,
  .character {
    color: white;
    font-size: 0.85em;
    padding: 0.5em 0 0 0;
    margin: 0;
    text-align: center;
  }

  .character {
    color: lightgrey;
  }
`;

const BlankPhoto = styled.div`
  width: 125px;
  height: 187.5px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;

  .blank-user {
    color: grey;
    font-size: 3em;
  }
`;

const DetailsCast = ({ cast }) => {
  const featuredCast = getFeaturedCast(cast);
  if (featuredCast.length === 0) {
    return null;
  }

  const featuredCastList = featuredCast.map(item => {
    return (
      <CastCard key={item.id}>
        {item.profile_path ? (
          <img
            className="profile_photo"
            src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
            alt={item.name}
          />
        ) : (
          <BlankPhoto>
            <FontAwesomeIcon className="blank-user" icon={faUser} />
          </BlankPhoto>
        )}
        <div>
          <p className="name">{item.name}</p>
          <p className="character">{item.character}</p>
        </div>
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
