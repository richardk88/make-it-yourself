import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// const Center = styled.div`
//     text-align: center;
//     margin: auto;   
// `
const Center = styled.div`
    text-align: center;
    margin: 30px 250px 90px 250px;
    background-color: white;
    padding: 20px 30px 15px 30px;
    border: 1px solid rgba(0,0,0,.2);
`

const ProjectImage = styled.img`
    width: 280px;
    height: 280px;
`

class Project extends Component {
    constructor(){
        super();
        this.state = {
            user: "",
            project: [],
            steps: [],
            materials: "",
            image: "",
            userId: ""
        }
    }

    componentWillMount(){
        const userId = this.props.match.params.userId;
        const projectId = this.props.match.params.projectId;
        axios.get(`/api/user/${userId}/project/${projectId}`).then((res) => {
            this.setState({
                userId,
                project: res.data,
                steps: res.data.steps,
                materials: res.data.materials
            })
        })
    }

    render() {
        return (
            <Center>
                    <h1>{this.state.project.name}</h1>
                    <Link to={`/user/${this.props.match.params.userId}/`}>
                        <button>Go Back</button>
                    </Link>
                    {/* <button>Edit Project</button> */}
                <br />
                <br />
                <ProjectImage src={this.state.project.image} alt=""/>
                <br />
                <br />
                <div>
                    <div>
                        <p>Materials: {this.state.materials}</p>
                    </div>
                    <ul>
                        {this.state.steps.map((step, i) => {
                            return(
                                <div key={i}>
                                    <Link to={`/user/${this.state.userId}/project/${this.state.project._id}/steps/${step._id}`}>
                                        {step.name}
                                    </Link>
                                    {/* <button>Remove</button>  */}
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <Link to={`/user/${this.state.userId}/project/${this.state.project._id}/newStep`}>
                    <button>Add Step</button>
                </Link>
                <button>DELETE PROJECT</button>
            </Center>
        );
    }
}

export default Project;