import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const Center = styled.div`
    text-align: center;
    margin: 45px 400px 120px 400px;
    background-color: white;
    padding: 30px 70px 50px 70px;
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
                <Link to={`/user/${this.state.user._id}/newProject`}>
                    <button>New Project</button>
                </Link>
            </Center>
        );}
    }
}

export default Dashboard;