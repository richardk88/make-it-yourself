import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import User from './components/User';
import Project from './components/Project';
import Step from './components/Step';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          Hello World!
          <User />
          <Project />
          <Step />
        </div>
      </Router>  
    );
  }
}

export default App;
