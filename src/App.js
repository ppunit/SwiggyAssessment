import React from 'react';
import Category from './components/category/category'
import List from './components/list'

import './App.css';
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Swiggy</h4>
      </header>
      <div className="main-container">
        <div className="left-section">

        </div>
        <div className="middle-section">
          <div className="mid-left">
            <div className="fixed-position" key={props.isAll+"fixed-position"}>
            <Category></Category>
            </div>

          </div>
          <div className="mid-right" key={props.isAll+"mid-right-element"}>
            <List></List>

          </div>

        </div>
        <div className="right-section">

        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
      isAll: state.isAll,
      

  }
}

export default connect(mapStateToProps)(App);
