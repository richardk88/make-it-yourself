import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

class NewProjectForm extends Component {
    constructor() {
        super();
        this.state = {
            redirect: false,
            userId: "",
            project:{
                _id: '',
                name: "",
                image:"",
                materials: [],
                description:""
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
                    <h1>Create A New Project</h1>
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
                            <input type='submit'/>
                    </form>
                    <br />
                    <Link to={`/user/${this.props.match.params.userId}`}>Go back</Link>
                </div>
            );    
        }
    }
}

export default NewProjectForm;