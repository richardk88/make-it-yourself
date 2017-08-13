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
            redirect: false,
            email: '',
            password: ''
        }
    }

    componentWillMount() {
        axios.get('/api/user').then(res => {
            console.log(res.data);
            this.setState({users: res.data})
        });
    }

    render() {
        return (
            <Center>
                <div>
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Password" />
                </div>
                <div>
                    <button>Create Account</button>
                    <button>Login</button>
                </div>
                {this.state.users.map((user, i) => (
                    <div key={i}>
                        <Link to={`/user/${user._id}`}>
                            {user.firstName}'s Home
                        </Link>
                    </div>
                ))}
            </Center>
        );
    }
}

export default Home;