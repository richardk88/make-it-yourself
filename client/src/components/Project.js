import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Center = styled.div`
    text-align: center;
    margin: auto;
`

class Project extends Component {
    constructor(){
        super();
        this.state = {
            user: "",
            project: [],
            steps: []
        }
    }

    componentWillMount(){
        const userId = this.props.match.params.userId;
        const projectId = this.props.match.params.projectId;
        axios.get(`/api/user/${userId}/${projectId}`).then((res) => {
            this.setState({
                project: res.data,
                steps: res.data.steps
            })
        })
    }

    render() {
        return (
            <div>
                <Center>
                    <h1>{this.state.project.name}</h1>
                    <button>Edit</button>
                </Center>
                <ul>
                    {this.state.steps.map((step, i) => {
                        return(
                            <li key={i}>
                                <Link to={`/user/${this.state.user._id}/${this.state.project._id}/steps`}>
                                    {step.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <button>Add Step</button>
                <button>DELETE</button>
            </div>
        );
    }
}

export default Project;