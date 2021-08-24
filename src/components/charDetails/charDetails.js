import React, {Component} from 'react';
import {Term, H4, RandomBlock, Ul} from '../randomChar/randomChar';
import gotService from '../../services/gotService';
import styled from 'styled-components';

const ErrorSpan = styled.span`
    color: #fff;
    font-size: 1.7em;
    font-weight: 400;
    text-align: center;
`

export default class CharDetails extends Component {
    
    gotService = new gotService();

    state = {
        char: null
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.charId !== prevProps.charId) this.updateChar();
    }

    updateChar() {
        const {charId} = this.props;

        if (!charId) return;
        
        this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({char})
            })
        // this.foo.bar = 0;
    }

    render() {

        if (!this.state.char) return <ErrorSpan className='select-error'>Please, select a character</ErrorSpan>

        const {name, gender, born, died, culture} = this.state.char;

        return (
            <RandomBlock>
                <H4>{name}</H4>  
                <Ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Term>Gender</Term>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <Term>Born</Term>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item">
                        <Term>Died</Term>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item">
                        <Term>Culture</Term>
                        <span>{culture}</span>
                    </li>
                </Ul>
            </RandomBlock>
        );
    }
}