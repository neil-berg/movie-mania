import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getDirectors, getWriters } from '../helper';

const CrewContainer = styled.div`
  background: var(--black);
  padding: 1em;
  border-bottom: 1px solid grey;

  p {
    color: white;
    font-size: 0.85em;
    padding: 0 0 0.25em 0;
    max-width: 600px;
    margin: 0 auto;
  }

  .job {
    color: lightgrey;
    font-size: 1.1em;
  }
`;

const DetailsCrew = ({ credits }) => {
  const crew = credits.crew;
  const directors = getDirectors(crew);
  const writers = getWriters(crew);

  return (
    <CrewContainer>
      <p>
        <span className="job">Directed by </span>
        {directors}
      </p>
      {writers.length > 0 ? (
        <p>
          <span className="job">Written by </span> {writers}
        </p>
      ) : null}
    </CrewContainer>
  );
};

DetailsCrew.propTypes = {
  credits: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    credits: state.selectedMovieCredits
  };
};

export default connect(mapStateToProps)(DetailsCrew);
