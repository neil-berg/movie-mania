import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faAngleDoubleRight,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

import {
  overviewSnippet,
  formatReleaseDate,
  ratingToColor,
  createMovieSlug
} from '../helper';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 200px;
  grid-template-areas:
    'poster header'
    'poster overview'
    'poster link';
  border: 1px grey solid;
  border-radius: 3px;
  box-shadow: 1px 2px 2px grey;
  transition: all 0.2s ease-in;
  background: var(--black);

  :hover {
    box-shadow: 2px 4px 4px grey;
  }

  img {
    grid-area: poster;
    width: 100%;
    height: 225px;
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
    top: ${props => (props.rating !== '10' ? '5px' : '4px')};
    left: ${props => (props.rating !== '10' ? '17px' : '19px')};
    font-size: 0.85em;
    font-weight: bold;
  }

  .header__right p.title {
    margin: 0;
    padding: 0.25em;
    font-size: 0.9em;
    font-weight: bold;
    color: white;
  }

  .header__right p.release {
    margin: 0;
    padding: 0 0 0 0.35em;
    font-size: 0.75em;
    color: lightgrey;
  }

  p.overview {
    grid-area: overview;
    font-size: 0.75em;
    color: white;
    margin: 0;
    padding: 0 1em;
    line-height: 1.35em;
  }

  a {
    grid-area: link;
    padding: 1em;
    text-decoration: none;
    font-size: 0.85em;
    align-self: end;
    border-top: 1px solid grey;
    color: lightgrey;
    transition: all 0.2s ease-in;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    cursor: pointer;
  }

  a:hover {
    color: var(--yellow);
  }

  .link__text {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 500px) {
    grid-template-columns: 150px 260px;

    .header__right p.title {
      font-size: 1.1em;
    }

    .header__right p.release {
      padding: 0 0 0 0.5em;
    }

    p.overview {
      font-size: 0.8em;
    }
  }
`;

const BlankPoster = styled.div`
  width: 150px;
  height: 225px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px grey solid;
  grid-area: poster;

  .blank-video {
    color: grey;
    font-size: 3em;
  }
`;

const MovieCard = ({ movie }) => {
  let rating = movie.vote_average.toFixed(1);
  if (rating === '10.0') {
    rating = '10';
  }

  return (
    <CardContainer rating={rating}>
      {movie.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`Movie poster for ${movie.title}`}
        />
      ) : (
        <BlankPoster>
          <FontAwesomeIcon className="blank-video" icon={faVideo} />
        </BlankPoster>
      )}
      <div className="header">
        <div className="header__left">
          <FontAwesomeIcon
            icon={faStar}
            size="3x"
            color={ratingToColor(rating)}
          />
          <p className="rating">{rating > 0 ? rating : 'NA'}</p>
        </div>
        <div className="header__right">
          <p className="title">{movie.title}</p>
          <p className="release">{formatReleaseDate(movie.release_date)}</p>
        </div>
      </div>
      <p className="overview">{overviewSnippet(movie.overview)}</p>
      <Link to={createMovieSlug(movie)}>
        <div className="link__text">
          <span>Cast, trailers, and more</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} size="lg" />
        </div>
      </Link>
    </CardContainer>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieCard;
