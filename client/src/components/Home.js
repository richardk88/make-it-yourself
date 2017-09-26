import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Center = styled.div`
    background: url('https://i.imgur.com/cIT85NG.jpg') no-repeat center center fixed;
    background-size: cover;
    text-align: center;
    vertical-align: middle;
    margin: 12% 8.3%;
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
                    <input type="text" placeholder="E-mail" className='inputBox'/>
                    <input type="text" placeholder="Password" className='inputBox'/>
                </div>
                <br />
                <div>
                    <Link to={`/signUp`}>
                        <button className='btnColor'>Create Account</button>
                    </Link>
                    <button className='btnColor'>Login</button>
                </div>
                <br />
                {this.state.users.map((user, i) => (
                    <div key={i}>
                        <Link to={`/user/${user._id}`} className='userName'>
                            {user.userName}
                        </Link>
                    </div>
                ))}
            </Center>
        );
    }
}

export default Home;