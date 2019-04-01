import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25em 0;
  border-bottom: 2px solid var(--black);
`;

const StyledField = styled(Field)`
  height: 35px;
  width: 200px;
  border: none;
  margin: 0 1em;
  font-size: 0.85em;
`;

const Button = styled.button`
  padding: 0.25em 0.75em;
  border-radius: 10px;
  border: 2px solid var(--green);
  color: var(--black);
  font-size: 0.85em;
`;

let SearchBar = props => {
  const { handleSubmit } = props;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="left">
        <StyledField
          name="title"
          component="input"
          type="text"
          placeholder="Movie title"
        />
      </div>
      <Button type="submit">Search</Button>
    </StyledForm>
  );
};

SearchBar = reduxForm({
  form: 'movie'
})(SearchBar);

export default SearchBar;
