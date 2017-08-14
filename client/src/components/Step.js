import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
            console.log(res.data)
            this.setState({
                steps: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>{this.state.steps.name}</h1>
                    </div>
                    <div>
                        <img src={this.state.steps.image} alt="" />
                        <p>{this.state.steps.description}</p>
                    </div>
                </div> 
                <button>Edit</button>
                <button>DELETE</button>             
            </div>
        );
    }
}

export default Step;