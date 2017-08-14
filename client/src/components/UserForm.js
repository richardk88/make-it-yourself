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

    _changeUser = e => {
        this.setState ({
            firstName: e.target.value,
            lastName: e.target.value,
            userName: e.target.value,
            email: e.target.value,
            password: e.target.value,
            blurb: e.target.value
        })
    }

    

    render() {
        return (
            <div>
                <h1>Create A New User</h1>
                 <form>
                    <div>
                        <input name="userName" type="text" value={this.state.userName} required/>
                    </div>
                    <div>
                        <input name="firstName" type="text" value={this.state.firstName} required/>
                    </div>
                    <div>       
                        <input name="lastName" type="text" value={this.state.lastName} required/>
                    </div>
                    <div>
                        <input name="email" type="text" value={this.state.email} required/>
                    </div>
                    <div>
                        <input name="password" type="text" value={this.state.password} required/>
                    </div>
                    <div>
                        <input name="blurb" type="text" value={this.state.blurb} required/>
                    </div>
                        <input type='submit'/>
                </form>
            </div>
        );
    }
}

export default UserForm;