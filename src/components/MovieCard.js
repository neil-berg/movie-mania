import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 175px 200px;
  grid-template-areas:
    'poster title'
    'poster rating'
    'poster overview'
    'poster release';
  border: 1px lightgrey solid;
  border-radius: 3px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

  img {
    grid-area: poster;
    width: 100%;
  }

  h2.title {
    grid-area: title;
    margin: 0;
    padding: 0;
  }

  p.release {
    grid-area: release;
    margin: 0;
    padding: 0;
  }

  p.rating {
    grid-area: rating;
    margin: 0;
    padding: 0;
  }

  p.overview {
    grid-area: overview;
    font-size: 0.85em;
    margin: 0;
    padding: 0;
  }
`;

const MovieCard = ({ movie }) => {
  // Grab first 50 words of the overview
  const words = movie.overview.split(' ');
  const snippet =
    words.length > 30
      ? words
          .slice(0, 30)
          .concat('...')
          .join(' ')
      : words.join(' ');

  return (
    <CardContainer>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Movie poster"
      />
      <h2 className="title">{movie.title}</h2>
      <p className="release">{movie.release_date}</p>
      <p className="rating">{movie.vote_average}</p>
      <p className="overview">{snippet}</p>
    </CardContainer>
  );
};

export default MovieCard;
