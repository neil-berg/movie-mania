import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  fetchPersonDetails,
  fetchPersonCredits,
  setHeaderText
} from '../actions';

class PersonDetails extends React.Component {
  componentDidMount() {
    this.props.setHeaderText('Movie Mania');
    const personId = this.props.location.pathname.split('/')[2].split('-')[0];
    this.props.fetchPersonDetails(personId);
    this.props.fetchPersonCredits(personId);
  }
  render() {
    return <div>Person</div>;
  }
}

const mapStateToProps = state => {
  return {
    personDetails: state.personDetails,
    personCredits: state.personCredit
  };
};

export default connect(
  mapStateToProps,
  { fetchPersonDetails, fetchPersonCredits, setHeaderText }
)(PersonDetails);
