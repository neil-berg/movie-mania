import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { closeSearchBar, fetchSearchedMovie } from '../actions';

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

const StyledInput = styled.input`
  height: 44px;
  width: 100%;
  border: none;
  font-size: 0.85em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0;
  padding-right: 1em;
  background: white;
  color: var(--black);
  font-size: 0.85em;
  cursor: pointer;
`;

const Button = styled.button`
  border: none;
  margin: 0;
  padding-right: 1em;
  background: white;
  color: var(--black);
  font-size: 0.85em;
  font-family: 'Nanum Gothic', sans-serif;
`;

class SearchBarV2 extends React.Component {
  state = {
    value: ''
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = () => {
    // Close the search bar, reset the form,
    // and fetch these search results
    this.props.closeSearchBar();
    this.props.fetchSearchedMovie(this.state.value.split(' ').join('%20'));
    this.setState({ value: '' });
  };

  render() {
    const { searchBarOpen, closeSearchBar } = this.props;
    const isValid = this.state.value !== '' ? true : false;
    const formattedValue = this.state.value
      .toLowerCase()
      .split(' ')
      .join('-');

    return (
      <Wrapper searchBarOpen={searchBarOpen}>
        <FontAwesomeIcon
          className="icon-close"
          icon={faTimes}
          onClick={() => closeSearchBar()}
          style={{ cursor: 'pointer' }}
        />

        <StyledForm>
          <StyledInput
            type="text"
            placeholder="Enter movie title"
            value={this.state.value}
            onChange={e => this.handleChange(e)}
          />
          {isValid ? (
            <StyledLink
              to={`/search/${formattedValue}`}
              onClick={this.handleSubmit}
            >
              Search
            </StyledLink>
          ) : (
            <Button type="button" disabled>
              Search
            </Button>
          )}
        </StyledForm>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchBarOpen: state.searchBarOpen
  };
};

export default connect(
  mapStateToProps,
  { closeSearchBar, fetchSearchedMovie }
)(SearchBarV2);
