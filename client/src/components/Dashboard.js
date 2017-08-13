import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
            <div>
                <h1>{this.state.user.firstName}'s Dashboard</h1>
                <h3>{this.state.user.blurb}</h3>
                {this.state.projects.map((project, i) => {
                    return (
                        <div key={i}>
                            <img src={project.image} />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Dashboard;