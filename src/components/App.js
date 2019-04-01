import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import SearchContainer from './SearchContainer';
import NowPlaying from './NowPlaying';
import TopRated from './TopRated';
import ComingSoon from './ComingSoon';
import Trending from './Trending';
import SelectedMovie from './SelectedMovie';
import NotFound from './NotFound';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <SearchContainer />
          <Switch>
            <Route exact path="/" component={NowPlaying} />
            <Route path="/toprated" component={TopRated} />
            <Route path="/comingsoon" component={ComingSoon} />
            <Route path="/trending" component={Trending} />
            <Route path="/movie/:movieId" component={SelectedMovie} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
