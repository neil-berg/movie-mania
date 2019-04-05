import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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

  .rating {
    background: grey;
    padding: 1em;
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
      <div className="rating">
        <span>{movie.vote_average}/10</span>
        <span>{voteCount} votes</span>
      </div>
      {/* <div className="thirdRow">
        <p>Budget: ${budget}</p>
        <p>Revenue: ${revenue}</p>
      </div> */}
    </OverviewGrid>
  );
};

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie
  };
};

export default connect(mapStateToProps)(DetailsOverview);
