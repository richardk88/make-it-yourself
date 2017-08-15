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
        const newProject= { ...this.state.project };
        newProject[attributeName] = attributeValue;
        this.setState({project: newProject});
      };
    
    _addNewProject = e => {
        e.preventDefault();
        axios.post(`/api/user/${this.props.match.params.userId}/project`, this.state).then(res => {
            this.setState({
                project: res.data.projects,
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
                </div>
            );    
        }
    }
}

export default NewProjectForm;