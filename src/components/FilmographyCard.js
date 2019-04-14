import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import { getReleaseYear, createMovieSlug } from '../helper';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-areas:
    'title title'
    'date .'
    'character link';
  color: white;
  border-bottom: 1px grey solid;
  padding: 0.5em 1em;

  .title {
    grid-area: title;
    font-size: 1.1em;
    color: var(--green);
    margin: 0;
    padding: 0 0 0.25em 0;
  }

  .date {
    font-size: 1em;
    color: lightgrey;
    grid-area: date;
    margin: 0;
    padding: 0;
  }

  .character {
    grid-area: character;
    margin: 0;
    padding: 0;
  }

  .link {
    grid-area: link;
    color: lightgrey;
    text-decoration: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in;
    justify-self: end;
  }

  .link:hover {
    color: var(--yellow);
  }

  .link span {
    padding-right: 1em;
  }
`;

const FilmographyCard = ({ movie, section }) => {
  return (
    <CardContainer>
      <p className="title">{movie.title}</p>
      <p className="date"> {getReleaseYear(movie) || 'NA'}</p>

      <p className="character">{movie.character ? movie.character : 'NA'}</p>

      <Link className="link" to={createMovieSlug(movie)}>
        <span>Details</span>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </Link>
    </CardContainer>
  );
};

export default FilmographyCard;
