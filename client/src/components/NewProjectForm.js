import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link, Redirect} from 'react-router-dom';

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

class NewProjectForm extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            userId: '',
            project:{
                _id: '',
                name: '',
                image:'',
                materials: [],
                description:''
            }
        }
    }

    _changeEvent = e => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        const newState= { ...this.state };
        newState.project[attributeName] = attributeValue;
        this.setState(newState);
      };
    
    _addNewProject = e => {
        e.preventDefault();
        axios.post(`/api/user/${this.props.match.params.userId}/newProject`, this.state.project).then(res => {
            this.setState({
                redirect: true
            });
        }).catch(err => console.log(err));
    };

    render() {
        if (this.state.redirect){
            return <Redirect to={`/user/${this.props.match.params.userId}`} />
        } else {
            return (
                <div>
                    <h1 className='title'>Create A New Project</h1>
                    <Form className='boxShadow'>                                         
                        <form onSubmit={this._addNewProject}>
                            <div>
                                <input name="name" type="text" placeholder="Name" onChange={this._changeEvent} required/>
                            </div>
                            <div>
                                <input name="image" type="text"  placeholder="Image Link" onChange={this._changeEvent} required/>
                            </div>
                            <div>       
                                <input name="materials" type="text" placeholder="List of Materials" onChange={this._changeEvent} required/>
                            </div>
                            <div>
                                <input name="description" type="text" placeholder="Project Description" onChange={this._changeEvent} required/>
                            </div>
                            <br />
                                <input type='submit' className='btnColor'/>
                        </form>
                        <br />
                        <Link to={`/user/${this.props.match.params.userId}`} className='backBtn'>Go back</Link>
                    </Form>
                </div>
            );    
        }
    }
}

export default NewProjectForm;