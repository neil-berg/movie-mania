import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';

import {
  getReleaseYear,
  getCertification,
  getGenres,
  getVideos,
  getVoteCount,
  getBudgetAndRevenue
} from '../helper';

const OverviewGrid = styled.div`
  .title-specs {
    background: var(--black);
    padding: 1em;
  }

  .title {
    font-size: 1.2em;
    margin: 0;
    padding-bottom: 0.5em;
    color: var(--green);
  }

  .releaseYear {
    font-weight: light;
    font-size: 0.75em;
    color: lightgrey;
  }

  .specs {
    color: white;
    font-size: 0.75em;
  }

  .specs span {
    padding: 0 1em;
    border-right: 1px lightgrey solid;
  }

  .specs .certification {
    padding-left: 0;
  }

  .specs .genres {
    border: none;
  }

  .rating-money {
    border-top: 1px solid grey;
    background: var(--black);
    padding: 1em;
    color: white;
    font-size: 0.75em;
    display: flex;
  }

  .rating,
  .money {
    display: flex;
    flex: 1;
    align-items: center;
  }

  .text {
    display: flex;
    flex-direction: column;
    padding-left: 1em;
  }

  .text .big {
    color: white;
    font-size: 1.5em;
  }

  .text .small {
    color: lightgrey;
    font-size: 1em;
  }
`;

const DetailsOverview = ({ movie }) => {
  const releaseYear = getReleaseYear(movie);
  const certification = getCertification(movie);
  const genres = getGenres(movie);
  const videos = getVideos(movie);
  const voteCount = getVoteCount(movie);
  const [budget, revenue] = getBudgetAndRevenue(movie);

  return (
    <OverviewGrid>
      <div className="title-specs">
        <p className="title">
          {movie.title} <span className="releaseYear">({releaseYear})</span>
        </p>
        <div className="specs">
          <span className="certification">{certification}</span>
          <span className="runtime">{movie.runtime} min</span>
          <span className="genres">{genres}</span>
        </div>
      </div>
      <div className="rating-money">
        <div className="rating">
          <FontAwesomeIcon icon={faStar} color="var(--yellow)" size="2x" />
          <div className="text">
            <div className="text__rating">
              <span className="big">
                {movie.vote_average > 0 ? movie.vote_average : 'NA'}
              </span>
              <span className="small">
                {movie.vote_average > 0 ? '/10' : ''}
              </span>
            </div>
            <span className="small">{voteCount} votes</span>
          </div>
        </div>
        <div className="money">
          <FontAwesomeIcon
            icon={faMoneyBillAlt}
            color="var(--green)"
            size="2x"
          />
          <div className="text">
            <span className="small">Budget: ${budget}</span>
            <span className="small">Revenue: ${revenue}</span>
          </div>
        </div>
      </div>
    </OverviewGrid>
  );
};

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie
  };
};

export default connect(mapStateToProps)(DetailsOverview);
