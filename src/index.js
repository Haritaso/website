import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LinkBox from './components/link_box';
import Profile from './components/main/Profile';
import Works from './components/main/Works';
import Contact from './components/main/Contact';

import '../assets/scss/style.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LinkBox} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('App'));
