import React from 'react';
import Card from '../cards/cards'
import ReactTask from '../../reactTask.json';
import './list.css'
import List from './list'
import { connect } from 'react-redux'

class ListDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: JSON.parse(JSON.stringify(ReactTask))
        }
        this.myRef = React.createRef()
        const ids = []
        const refs = ReactTask.reduce((acc, value) => {
            acc[value.category] = React.createRef();
            ids.unshift(value.category)
            return acc;
        }, {});
        this.props.dispatch({ type: "REFS", target: refs })

    }

    render() {
        return (
            ReactTask.map((list, index) => {
                return (
                    <div key={this.props.isAll + list.category}  >
                        <h2 ref={this.props.refs[list.category]} id={list.category}>{list.category}</h2>
                        {this.props.isAll ? <List list={list.restaurantList}></List> :
                            <List list={list.restaurantList.filter((item) => item.isExlusive)}></List>
                        }
                    </div>
                )
            })
        )


    }
}
function mapStateToProps(state) {
    return {
        isAll: state.isAll,
        refs: state.refs

    }
}
export default connect(mapStateToProps)(ListDetail);