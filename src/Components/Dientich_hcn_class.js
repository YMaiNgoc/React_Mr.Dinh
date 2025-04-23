import React, { Component } from 'react';

export default class Dientich_hcn_class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      width: 0,
      area: 0
    };
  }
  handleCalculate = () => {
    const { length, width } = this.state;
    this.setState({ area: length * width });
  };

  render() {
    return (
      <div>
        <h1>Rectangle Area Calculator</h1>
        <input
          type="number"
          value={this.state.length}
          onChange={(e) => this.setState({ length: parseFloat(e.target.value) || 0 })}
          placeholder="Length"
        />
        <input
          type="number"
          value={this.state.width}
          onChange={(e) => this.setState({ width: parseFloat(e.target.value) || 0 })}
          placeholder="Width"
        />
        <button onClick={this.handleCalculate}>Calculate Area</button>
        <h2>Area: {this.state.area}</h2>
      </div>
    );
  }
}
