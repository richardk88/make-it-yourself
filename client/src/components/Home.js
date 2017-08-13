import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';

const Center = styled.div`
    text-align: center;
    margin: auto;
`

class Home extends Component {
    constructor() {
        super(); 
        this.state = {
            users: [],
            email: '',
            password: ''
        }
    }

    componentWillMount() {
        axios.get('/api/user').then(res => {
            console.log(this.state.users);
        })
    }

    render() {
        return (
            <Center>
                <div>
                    <button>Create Account</button>
                    <button>Login</button>
                </div>
            </Center>
        );
    }
}

export default Home;