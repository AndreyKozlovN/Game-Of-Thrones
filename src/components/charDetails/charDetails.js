import React, {Component} from 'react';
import {Term, H4, RandomBlock, Ul} from '../randomChar/randomChar';

export default class CharDetails extends Component {

    render() {
        return (
            <RandomBlock>
                <H4>John Snow</H4>  
                <Ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Term>Gender</Term>
                        <span>male</span>
                    </li>
                    <li className="list-group-item">
                        <Term>Born</Term>
                        <span>1783</span>
                    </li>
                    <li className="list-group-item">
                        <Term>Died</Term>
                        <span>1820</span>
                    </li>
                    <li className="list-group-item">
                        <Term>Culture</Term>
                        <span>First</span>
                    </li>
                </Ul>
            </RandomBlock>
        );
    }
}