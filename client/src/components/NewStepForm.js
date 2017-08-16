import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const Center = styled.div`
    text-align: center;
    margin: auto;
`

class NewStepForm extends Component {
    constructor () {
        super();
        this.state = {
            redirect: false,
            step:{    
                name: '',
                image: '',
                description: '',
            }
        }
    }

    _changeEvent = e => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        const newState = { ...this.state };
        newState.step[attributeName] = attributeValue;
        this.setState(newState);
      };
    
    _addNewStep = e => {
        e.preventDefault();
        axios.post(`/api/user/${this.props.match.params.userId}/project/${this.props.match.params.projectId}/newStep`, this.state.step).then(res => {
            this.setState({
                redirect: true
            });
        }).catch(err => console.log(err));
    };

    render() {
        if (this.state.redirect){
            return <Redirect to={`/user/${this.props.match.params.userId}/project/${this.props.match.params.projectId}`} />
        } else {
            return (
                <div>
                    <h1>Create A New Step</h1>
                    <form onSubmit={this._addNewStep}>
                        <div>
                            <input name="name" type="text" placeholder="Name" onChange={this._changeEvent} required/>
                        </div>
                        <div>
                            <input name="image" type="text"  placeholder="Image Link" onChange={this._changeEvent} required/>
                        </div>
                        <div>       
                            <input name="description" type="text" placeholder="Description" onChange={this._changeEvent} required/>
                        </div>
                            <input type='submit'/>
                    </form>
                    <Link to={`/user/${this.props.match.params.userId}/project/${this.props.match.params.projectId}`}>
                        Go Back
                    </Link>
                </div>
            );    
        }
    }
}

export default NewStepForm;