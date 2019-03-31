import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import SearchContainer from './SearchContainer';
import Home from './Home';
import MovieDetails from './MovieDetails';
import NotFound from './NotFound';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/search/:titleId" component={MovieDetails} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
