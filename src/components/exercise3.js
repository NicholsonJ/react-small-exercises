import React, { Component } from 'react';

export default class Exercise3 extends Component {
  render() {
    return (
      <div className="Exercise">
        <h1>Exercise 3</h1>
        <div className="alert alert-info">
          <u>Iteration 1</u>: Give the value of "x" from <code>ComponentA</code> to{' '}
          <code>ComponentC</code> <br />
          <u>Iteration 2</u>: Change the "x" when clicking on the button "x++"
          <br />
        </div>
        <ComponentA />
      </div>
    );
  }
}

class ComponentA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 42
    };
  }
  onButtonClick(e) {
    let value = this.state.x + 1;
    this.setState({
      x: value
    });
  }
  render() {
    return (
      <div className="border">
        <h2>ComponentA</h2>x = {this.state.x}
        <ComponentB value={this.state.x} onClick={this.onButtonClick.bind(this)} />
      </div>
    );
  }
}

class ComponentB extends Component {
  render() {
    return (
      <div className="border">
        <h2>ComponentB</h2>x = {this.props.value}
        <ComponentC value={this.props.value} onClick={this.props.onClick.bind(this)} />
      </div>
    );
  }
}

class ComponentC extends Component {
  render() {
    return (
      <div className="border">
        <h2>ComponentC</h2>x = {this.props.value}
        <br />
        <button className="btn btn-primary btn-sm" onClick={this.props.onClick.bind(this)}>
          x++
        </button>
      </div>
    );
  }
}
