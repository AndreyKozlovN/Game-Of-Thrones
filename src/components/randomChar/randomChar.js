import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import Error from '../error';
import gotService from '../../services/gotService';

export const Term = styled.span`
    font-weight: bold;
`

export const H4 = styled.h5`
    margin-bottom: 20px;
    text-align: center;
    color: #4169E1;
`

export const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
    img {
    width: 100%;
    }
`
export const Ul = styled.ul`
    li {
        display: flex;
        justify-content: space-between; 
    }
`

export default class RandomChar extends Component {

    gotService = new gotService();
    state = {
        char: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char, // после того как персонаж (данные) загрузились
            loading: false // выключаем наш спинер
        }) 
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateChar= () => {
        const id = Math.floor(Math.random()*140 + 30);        
        // const id = 123231212; //расскоментировать для просмотра вывода ошибки

        // рандомное число начиная с 30 заканчивая 140 (floor округляет до целого)
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    render() {
        console.log('render');
        const { char, loading, error } = this.state;

        const errorMessage = error ? <Error /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char} /> : null; 

        return (
            <RandomBlock>
                {errorMessage}
                {spinner}
                {content}
            </RandomBlock>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;
    // если как аргумент принимать props, то данные будем брать не из char а this.props.char
    return (
        <>
            <H4>Random Character: {name}</H4>
            <Ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <Term>Gender </Term>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item">
                    <Term>Born </Term>
                    <span>{born}</span>
                </li>
                <li className="list-group-item">
                    <Term>Died </Term>
                    <span>{died}</span>
                </li>
                <li className="list-group-item">
                    <Term>Culture </Term>
                    <span>{culture}</span>
                </li>
            </Ul>
        </>
    )
}