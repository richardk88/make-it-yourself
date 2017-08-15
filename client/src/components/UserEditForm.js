import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';

class UserEditForm extends Component {
    constructor () {
        super();
        this.state = {
            redirect: false,
            user: {
                _id: '',
                userName: '',
                firstName: '',
                lastName: '',
                email: '',
                blurb: ''
            }
        }
    }

    _handleEditUpdate = (e) => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        const updateUser = {...this.state};
        updateUser [attributeName] = attributeValue;
        this.setState(updateUser);
    }

    _editUser = (e) => {
        e.preventDefault();
        axios.put('/api/user/:userId', this.state.user).then((res) => {
            console.log('User Edit Worked!')  
        }).catch(err => console.log(err))
    }

    render() {
        if (this.state.redirect){
            return <Redirect to={`/user/${this.props.match.params.userId}`} />
        } else {
            return (
                <div>
                    <h1>Edit User Dashboard</h1>
                    <form onSubmit={this._editUser}>
                        <div>
                            <input name="userName" type="text" value={this.state.user.userName} onChange={this._handleEditChange} placeholder="User Name"/>
                        </div>
                        <div>
                            <input name="firstName" type="text" value={this.state.user.firstName}  onChange={this._handleEditChange} placeholder="First Name"/>
                        </div>
                        <div>       
                            <input name="lastName" type="text" value={this.state.user.lastName} onChange={this._handleEditChange} placeholder="Last Name"/>
                        </div>
                        <div>
                            <input name="email" type="text" value={this.state.user.email} onChange={this._handleEditChange} placeholder="E-mail"/>
                        </div>
                        <div>
                            <input name="blurb" type="text" value={this.state.user.blurb} onChange={this._handleEditChange} placeholder="Brief Intro"/>
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

export default UserEditForm;