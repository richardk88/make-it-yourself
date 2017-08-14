import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Center = styled.div`
    text-align: center;
    margin: auto;
`
class Step extends Component {
    render() {
        return (
            <div>
                Hello from Step.
            </div>
        );
    }
}

export default Step;