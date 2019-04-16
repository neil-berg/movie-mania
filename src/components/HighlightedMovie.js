import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleRight,
  faStar,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

const HighlightedContainer = styled.div`
  color: white;
  border: 1px grey solid;
  border-radius: 3px;
  width: 350px;
  margin: 1em auto;
  box-shadow: 1px 2px 2px grey;
  background: var(--black);

  .poster {
    width: 348px;
    height: auto;
    display: block;
  }

  .info {
    padding: 0.25em 1em;
  }

  .info .title {
    font-size: 1.5em;
    color: var(--green);
    margin: 0;
    padding: 0.25em 0;
    transform: translateX(-3px);
  }

  .info .score {
    color: grey;
    margin: 0;
    padding: 0;
  }

  .info .score .number {
    font-size: 1em;
    color: white;
    padding-right: 0.35em;
  }

  .overview {
    padding: 0 1em;
    color: lightgrey;
    font-size: 0.85em;
    line-height: 1.5em;
  }

  .link {
    border-top: 1px grey solid;
  }

  .link a {
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    transition: all 0.3s ease-out;
  }

  .link a:hover {
    color: var(--yellow);
  }
`;

const SectionHeader = styled.h2`
  color: white;
  margin: 0;
  padding: 0.75em;
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;

  .header-icon {
    margin-right: 1em;
  }
`;

const HighlightedMovie = ({ movie }) => {
  if (!movie) {
    return null;
  }
  return (
    <HighlightedContainer>
      <SectionHeader>
        <FontAwesomeIcon className="header-icon" icon={faChartLine} />
        <span>Top Trending Movie</span>
      </SectionHeader>
      {movie.poster_path ? (
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={`Movie poster for ${movie.title}`}
        />
      ) : null}

      <div className="info">
        <p className="title">{movie.title}</p>
        <p className="score">
          <span className="number">{movie.vote_average}</span>
          <FontAwesomeIcon icon={faStar} color="var(--yellow)" />
        </p>
      </div>

      <p className="overview">{movie.overview}</p>
      <div className="link">
        <Link to="/trending/page-1">
          <span className="link-text">View all trending</span>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </Link>
      </div>
    </HighlightedContainer>
  );
};

HighlightedMovie.propTypes = {
  movie: PropTypes.object
};

export default HighlightedMovie;
