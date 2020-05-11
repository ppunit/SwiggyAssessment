import React from 'react';
import Card from '../cards/cards'
import { connect } from 'react-redux'

class List extends React.Component{
    constructor(props){
        super(props)
      this.state={
        items: this.props.list,
        visible: this.props.isAll?this.props.list.length:5,
       
      }
      this.loadMore = this.loadMore.bind(this);

    }
    loadMore() {
        this.setState((prev) => {
          return {visible: prev.visible + 6};
        });
      }
    render(){
        return(
            
                    <div className="list-container" >
                    {this.state.items.slice(0, this.state.visible).map((restDetail,index)=>{
                        
                       return <div className="card-container" key={restDetail.delivery_time+index+restDetail.price_for_two+index+restDetail.food_types+index}><Card RestDetail={restDetail}></Card></div>
                       
                    })}
                    {this.state.visible < this.state.items.length &&
             <button onClick={this.loadMore} type="button" className="load-more">+{this.state.items.length-this.state.visible} more</button>
          }
                    </div>
                    
               
            

        )
    }
}
function mapStateToProps(state) {
  return {
      isAll: state.isAll

  }
}
export default connect(mapStateToProps)(List);