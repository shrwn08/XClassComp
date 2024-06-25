import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increamentCount=()=>{
    this.setState({count:this.state.count + 1});
  }

decreamentCount=()=>{
    this.setState({count:this.state.count - 1});
  }

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button type="button" onClick={this.increamentCount}>
          Increament
        </button>
        <button type="button" onClick={this.decreamentCount}>
          Decreament
        </button>
      </div>
    );
  }
}

export default App;
