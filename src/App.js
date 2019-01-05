import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, this is my first page in React.js. I love it already!</h1>
    //   </div>
    // );

    // this is alternative of the JS code written above.
    return React.createElement('div', {className: 'App'}, React.createElement('h2', null, 'Does this even work?'));
  }
}

export default App;
