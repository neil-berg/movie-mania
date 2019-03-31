import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import MovieSearch from './MovieSearch';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={MovieSearch} />
            <Route path="/search" component={SearchResults} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
