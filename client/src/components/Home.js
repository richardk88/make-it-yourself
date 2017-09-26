import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Center = styled.div`
    background: url('https://i.imgur.com/cIT85NG.jpg') center center fixed;
    background: cover;
    text-align: center;
    vertical-align: middle;
    margin: 12% 5%;
    padding: 120px;
`

class Home extends Component {
    constructor() {
        super(); 
        this.state = {
            users: [],
            redirect: false,
            email: '',
            password: '',
        }
    }

    componentWillMount() {
        axios.get('/api/user').then(res => {
            this.setState({
                users: res.data
            })
        });
    }

    render() {
        return (
            <Center>
                <div>
                    <input type="text" placeholder="E-mail" />
                    <input type="text" placeholder="Password" />
                </div>
                <br />
                <div>
                    <Link to={`/signUp`}>
                        <button>Create Account</button>
                    </Link>
                    <button>Login</button>
                </div>
                <br />
                {this.state.users.map((user, i) => (
                    <div key={i}>
                        <Link to={`/user/${user._id}`}>
                            {user.userName}
                        </Link>
                    </div>
                ))}
            </Center>
        );
    }
}

export default Home;