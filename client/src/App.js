import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import Step from './components/Step';
import UserForm from './components/UserForm';
import UserEditForm from './components/UserEditForm';
import NewProjectForm from './components/NewProjectForm';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/signUp/" component={UserForm} />
            <Route exact path="/user/:userId/" component={Dashboard} />
            <Route exact path="/user/:userId/edit" component={UserEditForm} />
            <Route exact path="/user/:userId/newProject" component={NewProjectForm} />
            <Route exact path="/user/:userId/project/:projectId" component={Project} />
            <Route exact path="/user/:userId/project/:projectId/steps/:stepId" component={Step} />
          </div>
        </div>
      </Router>  
    );
  }
}

export default App;
