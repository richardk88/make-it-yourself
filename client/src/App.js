import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import User from './components/User';
import Project from './components/Project';
import Step from './components/Step';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Dashboard</Link>
            
          </div>
          <div>
            <Route exact path="/" component={Dashboard} />
            <User />
            <Project />
            <Step />  
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;
