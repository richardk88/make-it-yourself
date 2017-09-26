import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {Link, Redirect} from 'react-router-dom';

const Form = styled.div`
    background: url('https://i.imgur.com/cIT85NG.jpg') no-repeat center center fixed;
    background-size: cover;
    text-align: center;
    vertical-align: middle;
    margin: 7% 8.3%;
    padding: 90px 80px;
    input {
        font-size: 1.7rem;
        padding: 2px 10vw 0 2px;
        text-align: left;
        border: 1px solid black;
        margin: 2px;
    }
`

class UserForm extends Component {
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            blurb: "",
            redirect: false,
            userId: ""
        }
    }

    _changeEvent = e => {
        const attributeName = e.target.name;
        const attributeValue = e.target.value;
        const newState = { ...this.state };
        newState[attributeName] = attributeValue;
        this.setState(newState);
      };
    
      _addNewUser = e => {
        e.preventDefault();
        axios.post("/api/user/signUp", this.state).then(res => {
          this.setState({
              userId: res.data._id,
              redirect: true
            });
        }).catch(err => console.log(err));
      };

    render() {
        if (this.state.redirect){
            return <Redirect to={`/user/${this.state.userId}`} />
        } else {
            return (
                <div>
                        <h1 className='newAccount'>New Account</h1>
                    <Form className='boxShadow'>
                        <form onSubmit={this._addNewUser}>
                            <div>
                                <input name="userName" type="text" placeholder="User Name" onChange={this._changeEvent} required/>
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
                                <input name="blurb" type="text" placeholder="Brief Intro" onChange={this._changeEvent} />
                            </div>
                            <br />
                                <input type='submit' className='btnColor'/>
                        </form>
                    </Form>
                </div>
            );    
        }
    }
}

export default UserForm;