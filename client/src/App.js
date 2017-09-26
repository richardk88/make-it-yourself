import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaHome} from 'react-icons/lib/fa'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import Step from './components/Step';
import UserForm from './components/UserForm';
import UserEditForm from './components/UserEditForm';
import NewProjectForm from './components/NewProjectForm';
import NewStepForm from './components/NewStepForm';

const Nav = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  width: 100vw;
  border-bottom: 2px solid rgba(0,0,0,.0975);
  p{
    font-size: 1.7rem;
    font-family: 'Work Sans', sans-serif;
    color: white;
    letter-spacing: 1.5px;
  }
  svg {
    color: white;
  }
`
const Footer = styled.p`
  bottom: 0px;
  width: 100vw;
  height: .5vw;
  text-align: center;
  margin-bottom: 0;
  padding: 0 3vw 30px 3vw;
  border-top: 2px solid rgba(0,0,0,0);
    p{
      color: rgba(255, 255, 255, 0.73);
      font-size: 1.3 rem;
    }
`

const style = {
  width: "50px",
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav>
          <p><Link to="/"><img src='https://i.imgur.com/AzWK4V8.png' style={style}/></Link></p>
          <p>MAKE <span className='it'>it</span> YOURSELF</p>
          <p><Link to="/"><FaHome size={20}/></Link></p>
        </Nav>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/signUp/" component={UserForm} />
            <Route exact path="/user/:userId/" component={Dashboard} />
            <Route exact path="/user/:userId/edit" component={UserEditForm} />
            <Route exact path="/user/:userId/newProject" component={NewProjectForm} />
            <Route exact path="/user/:userId/project/:projectId" component={Project} />
            <Route exact path="/user/:userId/project/:projectId/newStep" component={NewStepForm} />
            <Route exact path="/user/:userId/project/:projectId/steps/:stepId" component={Step} />
        <Footer>
          <p>© 2017 by Richard Kim</p>
        </Footer>
        </div>
      </Router>  
    );
  }
}

export default App;
