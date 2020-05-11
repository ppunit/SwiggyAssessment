import React from 'react'
import ReactJson from '../../reactTask.json'
import './category.css'
import { connect } from 'react-redux'
import Scrollspy from 'react-scrollspy'
import ReactTask from '../../reactTask.json';

class Category extends React.Component {
    constructor(props) {
        super(props)
        const ids = ReactTask.map((acc,index) => {

            return acc.category
        }, {});
        this.state = {
            color: 'black',
            items: ids
        }
        this.scrollToNode = this.scrollToNode.bind(this);
        this.ref = React.createRef();

    }


    setAll = () => {
        this.props.dispatch({ type: "ISALL", target: true })

    }

    scrollToNode(node) {
        this.props.refs[node].current.scrollIntoView({ behavior: 'smooth' });
    }
    render() {
       
        return (
            <Scrollspy items={this.state.items} componentTag="div" currentClassName="active">
                {
                    ReactJson.map((list, index) => {
                        return <div key={list.category + index}> <span onClick={() => this.scrollToNode(list.category)} >{list.category}</span></div>
                    })
                }
                <div> <span className="show-all" id="show-all" onClick={this.setAll}>See All</span></div>
            </Scrollspy>
        )
    }

}
function mapStateToProps(state) {
    return {
        isAll: state.isAll,
        refs: state.refs,
        activeClassItem: state.activeClassItem

    }
}
export default connect(mapStateToProps)(Category);