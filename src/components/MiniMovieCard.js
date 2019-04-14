import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faStar } from '@fortawesome/free-solid-svg-icons';

import { formatDate } from '../helper';

const CardContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  color: white;
  border-bottom: 1px grey solid;
  padding: 0.5em 1em;

  .info .title {
    font-size: 1em;
    color: var(--green);
    margin: 0;
    padding: 0 0 0.25em 0;
  }

  .info .score {
    color: grey;
    margin: 0;
    padding: 0;
  }

  .info .score .number {
    font-size: 0.85em;
    color: white;
    padding-right: 0.35em;
  }

  .info .date {
    font-size: 0.9em;
    color: lightgrey;
  }

  .link {
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
      <div className="info">
        <p className="title">{movie.title}</p>
        {section === 'now-playing' ? (
          <p className="score">
            <span className="number">{movie.vote_average}</span>
            <FontAwesomeIcon icon={faStar} color="var(--yellow)" />
          </p>
        ) : (
          <span className="date">{formatDate(movie.release_date)}</span>
        )}
      </div>
      <Link
        className="link"
        to={`/movie/${movie.id}-${movie.title
          .toLowerCase()
          .split(' ')
          .join('-')}`}
      >
        <span>Details</span>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </Link>
    </CardContainer>
  );
};

export default MiniMovieCard;
