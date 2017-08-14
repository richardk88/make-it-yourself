import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Center = styled.div`
    text-align: center;
    margin: auto;
`

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            blurb: "",
            projects: []
        }
    }

    componentWillMount() {
        const id = this.props.match.params.userId;
        axios.get(`/api/user/${id}`).then((res) => {
            this.setState({
                user: res.data,
                projects: res.data.projects
            })
        })
    }

    render() {
        return (
            <Center>
                <h1>{this.state.user.firstName}'s Dashboard</h1>
                <button>Edit</button>
                <button>DELETE</button>
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
                <button>New Project</button>
            </Center>
        );
    }
}

export default Dashboard;