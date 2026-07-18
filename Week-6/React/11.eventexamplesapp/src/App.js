import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  sayHello = () => {
    alert("Hello! Member1");
  };

  handleIncrement = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  handleClick = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <h2>{this.state.count}</h2>

        <button onClick={this.handleIncrement}>Increment</button>
        <br />
        <br />

        <button onClick={this.decrement}>Decrement</button>
        <br />
        <br />

        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>
        <br />
        <br />

        <button onClick={this.handleClick}>Click on me</button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;