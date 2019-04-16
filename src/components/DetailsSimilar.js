import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { getReleaseYear, createMovieSlug } from '../helper';

const SubHeader = styled.h3`
  margin: 0;
  padding: 1em 0em 0.5em 1em;
  color: white;
  border-top: 1px grey solid;
  text-align: left;
  font-size: 1.2em;
  font-weight: 400;

  @media screen and (min-width: 450px) {
    text-align: center;
  }
`;

const SimilarContainer = styled.div`
  display: flex;
  overflow: scroll;
  padding: 1em 0;

  @media screen and (min-width: 450px) {
    justify-content: space-between;
  }
`;

const SimilarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 1em;

  .profile_photo {
    width: 125px;
    height: auto;
    flex-basis: 187.5px;
  }

  .title,
  .year {
    color: white;
    font-size: 0.85em;
    padding: 0.5em 0 0 0;
    margin: 0;
  }

  .year {
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

const DetailsSimilar = ({ similarMovies }) => {
  if (similarMovies.length === 0) {
    return null;
  }

  const similarList = similarMovies.map(movie => {
    return (
      <Link to={createMovieSlug(movie)} key={movie.id}>
        <SimilarCard>
          {movie.poster_path ? (
            <img
              className="profile_photo"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.name}
            />
          ) : (
            <BlankPhoto>
              <FontAwesomeIcon className="blank-user" icon={faUser} />
            </BlankPhoto>
          )}
          <div>
            <p className="title">{movie.title}</p>
            <p className="year">{getReleaseYear(movie)}</p>
          </div>
        </SimilarCard>
      </Link>
    );
  });
  return (
    <div style={{ background: 'var(--black)' }}>
      <SubHeader>Similar Movies</SubHeader>
      <SimilarContainer>{similarList}</SimilarContainer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    similarMovies: state.similarMovies
  };
};

export default connect(mapStateToProps)(DetailsSimilar);
