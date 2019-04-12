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
import Home from './Home';
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
            <Route exact path="/" component={Home} />
            <Route path="/nowplaying/:pageId" component={NowPlaying} />
            <Route path="/trending/:pageId" component={Trending} />
            <Route path="/comingsoon/:pageId" component={ComingSoon} />
            <Route path="/toprated/:genreId/:pageId" component={TopRated} />
            <Route exact path="/movie/:movieId" component={MovieDetails} />
            <Route path="/search/:searchId" component={MovieSearchResults} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
