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

const StepImage = styled.img`
    width: 300px;
    height: 300px;
`

class Step extends Component {
    constructor(){
        super();
        this.state = {
            redirect: false,
            user: "",
            steps: []
        }
    }

    componentWillMount(){
        const userId = this.props.match.params.userId;
        const projectId = this.props.match.params.projectId;
        const stepId = this.props.match.params.stepId;
        axios.get(`/api/user/${userId}/project/${projectId}/steps/${stepId}`).then((res) => {
            this.setState({
                steps: res.data
            })
        })
    }

    _deleteStep = () => {
        const userId = this.props.match.params.userId;
        const projectId = this.props.match.params.projectId;
        const stepId = this.props.match.params.stepId;
        axios.delete(`/api/user/${userId}/project/${projectId}/steps/${stepId}`).then(res => {
            this.setState({ redirect: true })
        })
    }

    render() {
        if (this.state.redirect){
            return <Redirect to={`/user/${this.props.match.params.userId}/project/${this.props.match.params.projectId}`} />
        } else {
            return (
                <Center className='boxShadow'>
                    <div>
                        <h1>{this.state.steps.name}</h1>
                    </div>
                    <div>
                        <StepImage src={this.state.steps.image} alt="" />
                        <br />
                        <br />
                        <p>{this.state.steps.description}</p>
                    </div>
                    <button onClick={this._deleteStep} className='btnColor'>delete</button> 
                    <div>
                        <Link to={`/user/${this.props.match.params.userId}/project/${this.props.match.params.projectId}`} className='backBtn'>
                            Go Back
                        </Link>
                    </div>          
                </Center>
            );
        }
    }
}

export default Step;