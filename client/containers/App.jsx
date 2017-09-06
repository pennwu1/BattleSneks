// Any stateful components/logic belong in containers
// Dump/statesless components belong in components
// http://redux.js.org/docs/basics/UsageWithReact.html

import React, { Component } from 'react';

import Background from '../components/Background.jsx';
import Snek from './Snek.jsx';
import Food from './Food.jsx';
import Block from './Block.jsx';


class App extends Component {

  render() {
    return(
      <div>
        <Background test='look at me passing down props' />
        <Snek />
        <Block />
        <Food />
      </div>
    )
  }
}

export default App;
