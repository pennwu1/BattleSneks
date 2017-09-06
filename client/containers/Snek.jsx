import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as snekActions from '../actions/snekActions.js';

const mapStateToProps = store => ({
  snek: store.snek,
});

const mapDispatchToProps = dispatch => ({
  doSomething: value => {
    dispatch(snekActions.doSomething(value));
  },
});

class Snek extends Component {
    constructor(props) {
      super(props);
    }

    handleClick() {
      this.props.doSomething('Did something!');
    }

    render() {
      return(
        <div id="snek">
          Hello from Snek component.
          <br />
          This is snekReducer: {this.props.snek}
          <button onClick={()=>this.handleClick()}>Dispatch snek action</button>
        </div>
      )
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Snek);
