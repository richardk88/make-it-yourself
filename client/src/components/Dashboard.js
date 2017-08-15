import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const Center = styled.div`
    text-align: center;
    margin: auto;
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
                <Link to={`/user/${this.state.user._id}/edit`}>
                    <button>Edit</button>
                </Link>
                <button onClick={this._deleteUser}>DELETE</button>
                <h4>{this.state.user.blurb}</h4>
                <div>
                    {this.state.projects.map((project, i) => {
                        return (
                            <div key={i}>
                                <Link to={`/user/${this.state.user._id}/project/${project._id}`}>
                                    <img src={project.image} alt=""/>
                                </Link>    
                            </div>
                        )
                    })}
                </div>
                <br />
                <Link to={`/api/user/${this.state.user._id}/project/newProject`}>
                    <button>New Project</button>
                </Link>
            </Center>
        );}
    }
}

export default Dashboard;