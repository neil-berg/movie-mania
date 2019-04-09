import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { closeSearchBar } from '../actions';

const Wrapper = styled.div`
  background: white;
  width: 100vw;
  padding: 0 1em;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  transform: ${props => (props.searchBarOpen ? '' : 'translateX(-100%)')};
  transition: transform 0.3s ease-out;

  .icon-close {
    font-size: 1em;
    color: var(--black);
    margin-right: 15px;
  }
`;
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledField = styled(Field)`
  height: 44px;
  width: 100%;
  border: none;
  font-size: 0.85em;
`;

const Button = styled.button`
  border: none;
  background: white;
  color: var(--black);
  font-size: 0.85em;
  cursor: pointer;
`;

const required = value => (value ? undefined : 'Required');

let SearchBar = props => {
  const { handleSubmit, searchBarOpen, closeSearchBar, valid, values } = props;
  console.log(values);
  return (
    <Wrapper searchBarOpen={searchBarOpen}>
      <FontAwesomeIcon
        className="icon-close"
        icon={faTimes}
        onClick={() => closeSearchBar()}
      />
      <StyledForm onSubmit={handleSubmit}>
        <StyledField
          name="title"
          component="input"
          type="text"
          placeholder="Enter movie title"
          validate={[required]}
        />
        {/* <Link to="/search/my-movie-title/">Search</Link> */}
        {valid ? (
          <Link to={`/search/sample-title`} onClick={() => closeSearchBar()}>
            Search
            {/* <Button type="submit" onClick={() => closeSearchBar()}>
              Search
            </Button> */}
          </Link>
        ) : (
          <Button type="button" disabled>
            Search
          </Button>
        )}
      </StyledForm>
    </Wrapper>
  );
};

SearchBar = reduxForm({
  form: 'movieForm'
})(SearchBar);

const mapStateToProps = state => {
  return {
    searchBarOpen: state.searchBarOpen
  };
};

export default connect(
  mapStateToProps,
  { closeSearchBar }
)(SearchBar);
