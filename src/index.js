import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';

const IndexStyled = styled.a`
	color: inherit;
    text-decoration: none;
        :visited {
            text-decoration: none;
            color: inherit;
        }
        :hover {
            text-decoration: none;
            color: inherit;
        }
        :focus {
            text-decoration: none;
            color: inherit;
        }
        :active {
            text-decoration: none;
            color: inherit;
        }
`
ReactDOM.render(<App />, document.getElementById('root'));