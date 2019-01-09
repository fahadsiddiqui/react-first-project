import React, { Component } from 'react';
import './App.css';
import Entity from './Entity/Entity';

class App extends Component {
  state = {
    entities: [
      { frequency: 26, nerType: "ORGANIZATION" },
      { frequency: 22, nerType: "ORGANIZATION" },
      { frequency: 21, nerType: "PERSON" },
      { frequency: 23, nerType: "ORGANIZATION" },
      { frequency: 20, nerType: "PERSON" }
    ]
  };

  changeStateHandler = () => {
    this.setState({
      entities: [
        { frequency: 126, nerType: "ORGANIZATION" },
        { frequency: 23, nerType: "PERSON" },
        { frequency: 21, nerType: "PERSON" },
        { frequency: 28, nerType: "PERSON" },
        { frequency: 20, nerType: "PERSON" }
      ]
    });
  };

  changedHandler = (event) => {
    this.setState({
      entities: [
        { frequency: 126, nerType: "ORGANIZATION" },
        { frequency: 23, nerType: "PERSON" },
        { frequency: event.target.value, nerType: "PERSON" },
        { frequency: 28, nerType: "PERSON" },
        { frequency: 20, nerType: "PERSON" }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, this is my first page in React.js. I love it already!</h1>
        <button onClick={this.changeStateHandler}>Change State</button>
        <Entity frequency={this.state.entities[0].frequency} nerType={this.state.entities[0].nerType}>My thing!</Entity>
        <Entity frequency={this.state.entities[1].frequency} nerType={this.state.entities[1].nerType}/>
        <Entity clicked={this.changedHandler} frequency={this.state.entities[2].frequency} nerType={this.state.entities[2].nerType}/>
        <Entity frequency={this.state.entities[3].frequency} nerType={this.state.entities[3].nerType}/>
        <Entity frequency={this.state.entities[4].frequency} nerType={this.state.entities[4].nerType}/>
      </div>
    );
  }
}

export default App;
