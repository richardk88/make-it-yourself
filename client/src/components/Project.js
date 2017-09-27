import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';


const Center = styled.div`
    text-align: center;
    margin: 3vh 12vw;
    background-color: white;
    padding: 20px 30px 15px 30px;
    border: 1px solid rgba(0,0,0,.2);
`
const ProjectImage = styled.img`
    width: 45vw;
    height: 40vh;
    border: 1px solid #E71E14;
`
class Project extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
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

    _deleteProject = () => {
        const userId = this.props.match.params.userId;
        const projectId = this.props.match.params.projectId;
        axios.delete(`/api/user/${userId}/project/${projectId}`).then(res => {
            this.setState({ redirect: true })
        })
    }

    render() {
        if (this.state.redirect){
            return <Redirect to={`/user/${this.state.userId}`} />
        } else {
            return (
                <Center className='boxShadow'>
                        <h1>{this.state.project.name}</h1>
                    <br />
                    <ProjectImage src={this.state.project.image} alt=""/>
                    <br />
                    <br />
                    <div>
                        <div>
                            <p className='materials'><b>MATERIALS :</b> {this.state.materials}</p>
                        </div>
                        <ul>
                            {this.state.steps.map((step, i) => {
                                return(
                                    <div key={i} className='steps'>
                                        <Link to={`/user/${this.state.userId}/project/${this.state.project._id}/steps/${step._id}`}>
                                            {step.name}
                                        </Link>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                    <Link to={`/user/${this.state.userId}/project/${this.state.project._id}/newStep`}>
                        <button className='btnColor'>Add Step</button>
                    </Link>

                    <button onClick={this._deleteProject} className='btnColor'>DELETE PROJECT</button>
                    <div>
                        <Link to={`/user/${this.props.match.params.userId}/`} className='backBtn'> Go Back</Link>
                    </div>
                </Center>
            );
        }
    }
}

export default Project;