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
            steps: [],
            materials: [],
            userId: ""
        }
    }

    componentWillMount(){
        const userId = this.props.match.params.userId;
        const projectId = this.props.match.params.projectId;
        axios.get(`/user/${userId}/project/${projectId}`).then((res) => {
            this.setState({
                userId: userId,
                project: res.data,
                steps: res.data.steps,
                materials: res.data.materials
            })
        })
    }

    render() {
        return (
            <div>
                <Center>
                    <h1>{this.state.project.name}</h1>
                    <Link to={`/user/${this.props.match.params.userId}/`}>
                        <button>Go Back</button>
                    </Link>
                    <button>Edit</button>
                </Center>
                <br />
                <img src={this.state.project.image} alt=""/>
                <div>
                    <div>
                        <h3>Materials:</h3>
                        {this.state.materials.map((material,i) => {
                            return(
                                <li key={i}>{material}</li>
                            )
                        })}
                    </div>
                    <ul>
                        {this.state.steps.map((step, i) => {
                            return(
                                <li key={i}>
                                    <Link to={`/user/${this.state.userId}/project/${this.state.project._id}/steps/${step._id}`}>
                                        {step.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <button>Add Step</button>
                <button>DELETE</button>
            </div>
        );
    }
}

export default Project;