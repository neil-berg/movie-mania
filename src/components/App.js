import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import SearchContainer from './SearchContainer';
import NowPlaying from './NowPlaying';
import TopRated from './TopRated';
import ComingSoon from './ComingSoon';
import Trending from './Trending';
import MovieDetails from './MovieDetails';
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
            <Route path="/movie/:movieId" component={MovieDetails} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
