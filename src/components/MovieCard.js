import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 200px;
  grid-template-areas:
    'poster title'
    'poster release'
    'poster rating'
    'poster overview'
    'poster link';
  border: 1px lightgrey solid;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  img {
    grid-area: poster;
    width: 100%;
  }

  h2.title {
    grid-area: title;
    margin: 0;
    padding: 0.25em 0 0 1em;
    font-size: 1em;
    color: var(--black);
  }

  p.rating {
    grid-area: rating;
    margin: 0;
    padding: 0 1em;
  }

  p.overview {
    grid-area: overview;
    font-size: 0.85em;
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
  }

  a:hover {
    background: var(--black);
    color: var(--green);
  }

  // @media screen and (min-width: 400px) {
  //   grid-template-columns: 175px 255px;
  // }
`;

const MovieCard = ({ movie }) => {
  // Grab first few words of the overview
  const words = movie.overview.split(' ');
  const snippet =
    words.length > 20
      ? words
          .slice(0, 20)
          .concat('...')
          .join(' ')
      : words.join(' ');

  const dateFormatted = new Date(movie.release_date)
    .toString()
    .split(' ')
    .slice(1, 4)
    .join(' ');

  return (
    <CardContainer>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Movie poster"
      />
      <h2 className="title">{movie.title}</h2>
      <p className="release">{dateFormatted}</p>
      <p className="rating">
        {' '}
        <FontAwesomeIcon icon={faStar} color="goldenrod" size="lg" />
        {movie.vote_average}
      </p>
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
