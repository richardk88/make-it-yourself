import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaHome, FaSearch} from 'react-icons/lib/fa'
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Project from './components/Project';
import Step from './components/Step';
import UserForm from './components/UserForm';
import UserEditForm from './components/UserEditForm';
import NewProjectForm from './components/NewProjectForm';
import NewStepForm from './components/NewStepForm';
// import {Navbar, NavItem, MenuItem, } from 'react-bootstrap';

const Nav = styled.div`
  background-color: rgba(182, 199, 191, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 45px 5vw;
  width: 100vw;
  height: 15px;
  border-bottom: 2px solid rgba(0,0,0,.0975);
  p{
    font-size: 2.55rem;
    font-family: 'Oleo Script', cursive;
    margin: 0;
    svg{
      margin-bottom: 5px;
    }
  }
`

const Footer = styled.p`
background-color: rgba(0,0,0,.55);
position: fixed;
bottom: 0px;
width: 100vw;
height: .5vw;
text-align: center;
margin-bottom: 0;
padding: 30px 3vw;
border-top: 2px solid rgba(0,0,0,0);
p{
  color:rgba(255,255,255,1);
  font-size: 1.7rem;
  margin: 0;
  svg{ 
    margin-bottom: 5px; }
}
`

const style = {
  height: "180px",
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Nav>
          <p><Link to="/"><FaHome /></Link></p>
          <p><Link to="/"><img src='http://i.imgur.com/95hyBA4.png' style={style}/></Link></p>
          <p><FaSearch /></p>
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
