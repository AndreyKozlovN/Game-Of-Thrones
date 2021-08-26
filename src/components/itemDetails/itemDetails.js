import React, {Component} from 'react';
import {Term, H4, RandomBlock, Ul} from '../randomChar/randomChar';
import styled from 'styled-components';

const ErrorSpan = styled.span`
    color: #fff;
    font-size: 1.7em;
    font-weight: 400;
    text-align: center;
`

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item">
            <Term>{label}</Term>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
};

export default class ItemDetails extends Component {
    
    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) this.updateItem();  
    }

    updateItem() {
        const {itemId, getData} = this.props;

        if (!itemId) return;
        
        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    render() {

        if (!this.state.item) return <ErrorSpan>Please, select a character</ErrorSpan>
        const {item} = this.state;
        const {name} = item;

        return (
            <RandomBlock>
                <H4>{name}</H4>  
                <Ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </Ul>
            </RandomBlock>
        );
    }
}