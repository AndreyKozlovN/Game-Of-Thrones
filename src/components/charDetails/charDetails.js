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


const Field = ({char, field, label}) => {
    return (
        <li className="list-group-item">
            <Term>{label}</Term>
            <span>{char[field]}</span>
        </li>
    )
}

export {
    Field
}

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
        const {char} = this.state;
        const {name} = char;

        return (
            <RandomBlock>
                <H4>{name}</H4>  
                <Ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {char})
                        })
                    }
                </Ul>
            </RandomBlock>
        );
    }
}