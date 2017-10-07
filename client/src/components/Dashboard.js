import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const Center = styled.div`
    text-align: center;
    margin: 2vh 4vw;
    background-color: white;
    padding: 20px 30px 15px 30px;
`
const Blurb = styled.p`
    text-align: center;
    margin: 0 19vw;
`
const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
    padding: 5px;
`
const ProjectImage = styled.img`
    width: 300px;
    height: 300px;
    border: 1px solid rgba(255, 26, 14, 0.55);
`

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            user: [],
            blurb: "",
            userId: "",
            redirect: false,
            projects: []
        }
    }
    componentWillMount() {
        const id = this.props.match.params.userId;
        axios.get(`/api/user/${id}`).then((res) => {
            this.setState({
                user: res.data,
                projects: res.data.projects,
                userId: id
            })
        })
    }
    _deleteUser = () => {
        axios.get(`/api/user/${this.state.user._id}/delete`).then((res) => {
            console.log(`User was deleted`);
        })
        this.setState({redirect: true})
    }

    render() {
        if(this.state.redirect){
            return <Redirect to={'/'}/>;
        } else {
        return (
            <div>
                <h1 className='title'>{this.state.user.firstName}'s Dashboard</h1>
                <Center>
                    <div>
                        <Link to={`/user/${this.state.user._id}/edit`}>
                            <button className='btnColor'>Edit</button>
                        </Link>
                        <button onClick={this._deleteUser} className='btnColor'>DELETE Dashboard</button>
                    </div>
                    <br />
                    <Blurb>{this.state.user.blurb}</Blurb>
                    <br />
                    <ProjectContainer>
                        {this.state.projects.map((project, i) => {
                            return (
                                <div key={i}>
                                    <Link to={`/user/${this.state.user._id}/project/${project._id}`}>
                                        <ProjectImage src={project.image} alt=""/>
                                    </Link>    
                                </div>
                            )
                        })}
                    </ProjectContainer>   
                    <br />
                    <Link to={`/user/${this.state.user._id}/newProject`}>
                        <button className='btnColor'>New Project</button>
                    </Link>
                </Center>
            </div>
        );}
    }
}

export default Dashboard;