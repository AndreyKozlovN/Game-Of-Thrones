import React, {Component} from 'react';
import styled from 'styled-components';

export const Term = styled.span`
    font-weight: bold;
`

export const H4 = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`

export const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    &.select-error {
        color: #fff;
        text-align: center;
        font-size: 26px;
    }
`
export const Ul = styled.ul`
    li {
        display: flex;
        justify-content: space-between; 
    }
`

export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlock>
                <H4>Random Character: John</H4>
                <Ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Term>Gender </Term>
                        <span>male</span>
                    </li>
                    <li className="list-group-item">
                        <Term>Born </Term>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item">
                        <Term>Died </Term>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item">
                        <Term>Culture </Term>
                        <span>Anarchy</span>
                    </li>
                </Ul>
            </RandomBlock>
        );
    }
}