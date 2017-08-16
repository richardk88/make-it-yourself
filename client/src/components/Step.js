import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Center = styled.div`
    text-align: center;
    margin: 30px 250px 90px 250px;
    background-color: white;
    padding: 40px;
    border: 1px solid rgba(0,0,0,.2);
`

const StepImage = styled.img`
    width: 280px;
    height: 280px;
`

class Step extends Component {
    constructor(){
        super();
        this.state = {
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

    render() {
        return (
            <Center>
                <div>
                    <div>
                        <Link to={`/user/${this.props.match.params.userId}/project/${this.props.match.params.projectId}`}>
                            <button>Go Back</button>
                        </Link>
                        <h1>{this.state.steps.name}</h1>
                    </div>
                    <div>
                        <StepImage src={this.state.steps.image} alt="" />
                        <br />
                        <br />
                        <p>{this.state.steps.description}</p>
                    </div>
                </div>             
            </Center>
        );
    }
}

export default Step;