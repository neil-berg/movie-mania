import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 200px;
  grid-template-areas:
    'poster header'
    'poster overview'
    'poster link';
  border: 1px lightgrey solid;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in;

  :hover {
    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
  }

  img {
    grid-area: poster;
    width: 100%;
  }

  .header {
    grid-area: header;
    display: flex;
    align-items: center;
    padding: 0.5em 0 0 1em;
    margin: 0;
    align-self: start;
  }

  .header__left {
    position: relative;
  }

  .header__left p.rating {
    color: var(--black);
    position: absolute;
    top: 5px;
    left: 17px;
    font-size: 0.85em;
    font-weight: bold;
  }

  .header__right p.title {
    margin: 0;
    padding: 0.25em;
    font-size: 0.9em;
    font-weight: bold;
    color: var(--black);
  }

  .header__right p.release {
    margin: 0;
    padding: 0 0 0 0.35em;
    font-size: 0.75em;
    color: grey;
  }

  p.overview {
    grid-area: overview;
    font-size: 0.75em;
    color: grey;
    margin: 0;
    padding: 0 1em;
  }

  a {
    grid-area: link;
    padding: 1em;
    text-decoration: none;
    font-size: 0.75em;
    align-self: end;
    border-top: 1px solid lightgrey;
    color: var(--black);
    transition: all 0.2s ease-in;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    cursor: pointer;
  }

  a:hover {
    background: var(--black);
    color: var(--grey);
    margin-right: 2px;
  }

  @media screen and (min-width: 500px) {
    grid-template-columns: 180px 230px;

    .header__right p.title {
      font-size: 1.15em;
    }

    .header__right p.release {
      padding: 0 0 0 0.5em;
    }

    p.overview {
      font-size: 0.9em;
    }
  }
`;

const MovieCard = ({ movie }) => {
  // Grab first 35 words of the overview
  const words = movie.overview.split(' ');
  const snippet =
    words.length > 25
      ? words
          .slice(0, 25)
          .concat('...')
          .join(' ')
      : words.join(' ');

  const dateFormatted = new Date(movie.release_date)
    .toString()
    .split(' ')
    .slice(1, 4)
    .join(' ');

  const score = Number(movie.vote_average).toFixed(1);
  let iconColor = '';
  if (score >= 7.5) {
    iconColor = 'var(--green)';
  } else if (score >= 5.4 && score < 7.5) {
    iconColor = 'var(--yellow)';
  } else {
    iconColor = 'var(--red)';
  }

  return (
    <CardContainer>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Movie poster"
      />
      <div className="header">
        <div className="header__left">
          <FontAwesomeIcon icon={faStar} size="3x" color={iconColor} />
          <p className="rating">{score}</p>
        </div>
        <div className="header__right">
          <p className="title">{movie.title}</p>
          <p className="release">{dateFormatted}</p>
        </div>
      </div>
      <p className="overview">{snippet}</p>
      <Link
        to={`movie/${movie.id}-${movie.title
          .toLowerCase()
          .split(' ')
          .join('-')}`}
      >
        Cast, trailers, and more ->{' '}
      </Link>
    </CardContainer>
  );
};

export default MovieCard;
