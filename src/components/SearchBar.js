import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

let SearchBar = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Enter movie title:</label>
        <Field name="title" component="input" type="text" />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};

SearchBar = reduxForm({
  form: 'movie'
})(SearchBar);

export default SearchBar;
