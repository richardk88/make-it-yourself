import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const Center = styled.div`
    text-align: center;
    margin: 30px 250px 90px 250px;
    background-color: white;
    padding: 20px 30px 15px 30px;
    border: 1px solid rgba(0,0,0,.2);
`

const Blurb = styled.p`
    text-align: center;
    margin-left: 4vw;
    margin-right: 4vw;
    background-color: rgba;
    padding: 10px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 6px;
`

const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: ;
    padding: 10px;
    border: 1px solid rgba(0,0,0,.2);
`
const ProjectCImage = styled.img`
    width: 10%;
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
            <Center>
                <h1>{this.state.user.firstName}'s Dashboard</h1>
                <div>
                    <Link to={`/user/${this.state.user._id}/edit`}>
                        <button>Edit</button>
                    </Link>
                    <button onClick={this._deleteUser}>DELETE DASHBOARD</button>
                </div>
                <br />
                <Blurb>{this.state.user.blurb}</Blurb>
                <br />
                <ProjectContainer>
                    {this.state.projects.map((project, i) => {
                        return (
                            <div key={i}>
                                <Link to={`/user/${this.state.user._id}/project/${project._id}`}>
                                    <ProjectCImage src={project.image} alt=""/>
                                </Link>    
                            </div>
                        )
                    })}
                </ProjectContainer>
                <br />
                <Link to={`/user/${this.state.user._id}/newProject`}>
                    <button>New Project</button>
                </Link>
            </Center>
        );}
    }
}

export default Dashboard;