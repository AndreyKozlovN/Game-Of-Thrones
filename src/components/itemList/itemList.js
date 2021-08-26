import React, {Component} from 'react';
import PropTypes from 'prop-types';
import GotService from '../../services/gotService';
import styled from 'styled-components';
import Spinner from '../spinner';

const UlCursor = styled.ul`
    cursor: pointer;
`

class ItemList extends Component {

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return (
                <li
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}
                    >
                    {label}
                </li>
            )
        })
    }

    render() {
        const {data} = this.props;
        const items = this.renderItems(data);

        return (
            <UlCursor className="item-list list-group">
                {items}
            </UlCursor>
        );
    }
}

const withData = (View, getData) => {
    return class extends Component {

        state = {
            data: null
        }
        static defaultProps = {
            onItemSelected: () => {}
        }
        static PropTypes = {
            onItemSelected: PropTypes.func
            // getData: PropTypes.arrayOf(PropTypes.object)
            // можно проверить что getData это массив в котором лежат объекты
        }
    
        componentDidMount() {
            getData()
                .then((data) => {
                    this.setState({
                        data
                    })
                })
        }
    
        
        render() {
            const {data} = this.state;

            if (!data) return <Spinner />

            return  <View {...this.props} data={data}/>
        }
    };
}
const {getAllCharacters} = new GotService();
export default withData(ItemList, getAllCharacters);