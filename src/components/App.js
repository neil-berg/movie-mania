import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faThermometerFull,
  faThermometerThreeQuarters,
  faThermometerHalf,
  faThermometerQuarter,
  faThermometerEmpty,
  faThermometer
} from '@fortawesome/free-solid-svg-icons';

import Header from './Header';
import NavBar from './NavBar';
import NowPlaying from './NowPlaying';
import TopRated from './TopRated';
import ComingSoon from './ComingSoon';
import Trending from './Trending';
import MovieDetails from './MovieDetails';
import MovieSearchResults from './MovieSearchResults';
import NotFound from './NotFound';
import Footer from './Footer';

library.add(
  faThermometerFull,
  faThermometerThreeQuarters,
  faThermometerHalf,
  faThermometerQuarter,
  faThermometerEmpty,
  faThermometer
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <NavBar />
          <Switch>
            <Route exact path="/" component={NowPlaying} />
            <Route path="/toprated" component={TopRated} />
            <Route path="/comingsoon" component={ComingSoon} />
            <Route path="/trending" component={Trending} />
            <Route exact path="/movie/:movieId" component={MovieDetails} />
            <Route
              exact
              path="/search/:searchId"
              component={MovieSearchResults}
            />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
