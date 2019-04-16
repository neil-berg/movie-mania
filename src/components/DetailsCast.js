import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { getFeaturedCast, createPersonSlug } from '../helper';

const SubHeader = styled.h3`
  margin: 0;
  padding: 1em 0em 0.5em 1em;
  color: var(--green);
  color: white;
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

const DetailsCast = ({ credits }) => {
  const cast = credits.cast;
  const featuredCast = getFeaturedCast(cast);
  if (featuredCast.length === 0) {
    return null;
  }

  const featuredCastList = featuredCast.map(person => {
    return (
      <Link to={createPersonSlug(person)} key={person.id}>
        <CastCard>
          {person.profile_path ? (
            <img
              className="profile_photo"
              src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
              alt={person.name}
            />
          ) : (
            <BlankPhoto>
              <FontAwesomeIcon className="blank-user" icon={faUser} />
            </BlankPhoto>
          )}
          <div>
            <p className="name">{person.name}</p>
            <p className="character">{person.character}</p>
          </div>
        </CastCard>
      </Link>
    );
  });
  return (
    <div style={{ background: 'var(--black)' }}>
      <SubHeader>Featured Cast</SubHeader>
      <CastContainer>{featuredCastList}</CastContainer>
    </div>
  );
};

DetailsCast.propTypes = {
  credits: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    credits: state.selectedMovieCredits
  };
};

export default connect(mapStateToProps)(DetailsCast);
