import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

const Form = styled.div`
    background: url('https://i.imgur.com/cIT85NG.jpg') no-repeat center center fixed;
    background-size: cover;
    text-align: center;
    vertical-align: middle;
    margin: 6% 8.3%;
    padding: 90px 80px;
    input {
        font-size: 1.7rem;
        text-align: center;
        border: 1px solid black;
        margin: 2px;
        width: 30vw;
    }
`
const style = {
    height: "280px",
}

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
                    <h1 className='title'>Create A New Step</h1>
                    <Form className='boxShadow'>                    
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
                            <br />
                                <input type='submit' className='btnColor'/>
                        </form>
                        <br />
                        <Link to={`/user/${this.props.match.params.userId}/project/${this.props.match.params.projectId}`} className='backBtn'>
                            Go Back
                        </Link>
                    </Form>
                </div>
            );    
        }
    }
}

export default NewStepForm;