import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faStar } from '@fortawesome/free-solid-svg-icons';

import { formatReleaseDate, createMovieSlug } from '../helper';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas:
    'title title'
    'details link';
  border-bottom: 1px grey solid;
  padding: 0.5em 1em;

  .title {
    grid-area: title;
    color: var(--green);
    font-size: 1.1em;
    margin: 0;
    padding: 0 0 0.5em 0;
  }

  .details {
    grid-area: details;
    font-size: 0.9em;
    color: lightgrey;
    margin: 0;
    padding: 0;
  }

  .details .number {
    color: white;
    padding-right: 0.35em;
  }

  .link {
    grid-area: link;
    justify-self: end;
    color: lightgrey;
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  .link:hover {
    color: var(--yellow);
  }

  .link span {
    padding-right: 1em;
  }
`;

const MiniMovieCard = ({ movie, section }) => {
  return (
    <CardContainer>
      <p className="title">{movie.title}</p>
      {section === 'now-playing' ? (
        <p className="details">
          <span className="number">{movie.vote_average}</span>
          <FontAwesomeIcon icon={faStar} color="var(--yellow)" />
        </p>
      ) : (
        <p className="details date">{formatReleaseDate(movie.release_date)}</p>
      )}
      <Link className="link" to={createMovieSlug(movie)}>
        <span>Details</span>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </Link>
    </CardContainer>
  );
};

export default MiniMovieCard;
