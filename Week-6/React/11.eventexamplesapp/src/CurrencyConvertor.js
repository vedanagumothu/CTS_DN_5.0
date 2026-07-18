import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      currency: "",
    };
  }

  handleAmount = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };

  handleCurrency = (e) => {
    this.setState({
      currency: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const euro = (parseFloat(this.state.amount) / 90).toFixed(2);

    alert(
      `Converting to Euro Amount is ${euro}`
    );
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "green" }}>
          Currency Convertor!!!
        </h1>

        <form onSubmit={this.handleSubmit}>
          <label>Amount:</label>

          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleAmount}
          />

          <br />
          <br />

          <label>Currency:</label>

          <input
            type="text"
            value={this.state.currency}
            onChange={this.handleCurrency}
          />

          <br />
          <br />

          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;