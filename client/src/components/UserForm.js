import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class UserForm extends Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            blurb: ""
        }
    }

    _changeEvent = e => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        const newUser = { ...this.state };
        newUser [attributeName] = attributeValue;
        this.setState(newUser);
      };
    
      _addNewUser = e => {
        e.preventDefault();
        axios.post("/api/user/signUp", this.state).then(res => {
          console.log("Success!");
        }).catch(err => console.log(err));
      };

    render() {
        return (
            <div>
                <h1>Create A New User</h1>
                 <form onSubmit={this._addNewUser}>
                    <div>
                        <input name="userName" type="text" placeholder="Username" onChange={this._changeEvent} required/>
                    </div>
                    <div>
                        <input name="firstName" type="text"  placeholder="First Name" onChange={this._changeEvent} required/>
                    </div>
                    <div>       
                        <input name="lastName" type="text" placeholder="Last Name" onChange={this._changeEvent} required/>
                    </div>
                    <div>
                        <input name="email" type="text" placeholder="E-mail" onChange={this._changeEvent} required/>
                    </div>
                    <div>
                        <input name="password" type="text" placeholder="Password" onChange={this._changeEvent} required/>
                    </div>
                    <div>
                        <input name="blurb" type="text" placeholder="Brief Intro" onChange={this._changeEvent} required/>
                    </div>
                        <input type='submit'/>
                </form>
            </div>
        );
    }
}

export default UserForm;