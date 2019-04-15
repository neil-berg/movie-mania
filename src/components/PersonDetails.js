import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import FilmographyCard from './FilmographyCard';
import {
  fetchPersonDetails,
  fetchPersonCredits,
  setHeaderText
} from '../actions';

import { formatBirthdate } from '../helper';

const PersonContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-areas:
    'photo info'
    'biography biography'
    'filmography filmography';
  border: 1px grey solid;
  border-radius: 3px;
  box-shadow: 1px 2px 2px grey;
  transition: all 0.2s ease-in;
  max-width: 600px;
  margin: 0 auto;

  .photo {
    grid-area: photo;
    width: 150px;
    height: auto;
  }

  .info {
    grid-area: info;
    color: white;
    border-bottom: 1px grey solid;
    padding: 0 1em;
  }

  .info .name {
    color: var(--yellow);
    font-size: 1.25em;
  }

  .biography {
    grid-area: biography;
    color: lightgrey;
    padding: 0 1em;
  }

  .filmography {
    grid-area: filmography;
  }
`;

const BlankPhoto = styled.div`
  width: 150px;
  height: 187.5px;
  border: 1px solid grey;
  grid-area: photo;

  .blank-user {
    color: grey;
    font-size: 3em;
  }
`;

class PersonDetails extends React.Component {
  componentDidMount() {
    this.props.setHeaderText('Movie Mania');
    const personId = this.props.location.pathname.split('/')[2].split('-')[0];
    this.props.fetchPersonDetails(personId);
    this.props.fetchPersonCredits(personId);
  }

  renderFilmList(credits) {
    return credits.map(movie => (
      <FilmographyCard key={movie.id} movie={movie} />
    ));
  }

  render() {
    const person = this.props.personDetails;
    const credits = this.props.personCredits;
    return (
      <PersonContainer>
        {person.profile_path ? (
          <img
            className="photo"
            src={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
            alt={person.name}
          />
        ) : (
          <BlankPhoto>
            <FontAwesomeIcon className="blank-user" icon={faUser} />
          </BlankPhoto>
        )}
        <div className="info">
          <p className="name">{person.name}</p>
          <p className="birth">Born on {formatBirthdate(person.birthday)}</p>
          <p className="birthplace">{person.place_of_birth}</p>
        </div>
        <div className="biography">
          <h2>Biography</h2>
          <p>{person.biography}</p>
        </div>
        <div className="filmography">
          <h2>Filmography</h2>
          {this.renderFilmList(credits)}
        </div>
      </PersonContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    personDetails: state.personDetails,
    personCredits: state.personCredits.sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date)
    )
  };
};

export default connect(
  mapStateToProps,
  { fetchPersonDetails, fetchPersonCredits, setHeaderText }
)(PersonDetails);
