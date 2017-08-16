import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Center = styled.div`
    text-align: center;
    margin: 40px 300px 0px 300px;
    background-color: white;
    padding: 50px;
    border: 1px solid rgba(0,0,0,.2);
`

const style = {
    height: "300px",
  }

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
                <img src='http://i.imgur.com/bEt0Age.png' style={style}/>
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