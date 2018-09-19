import React, { Component } from 'react';

export default class Exercise2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstVal: 0,
      secondVal: 0,
      operation: '+'
    };
  }
  handleClick(e) {
    e.preventDefault();
    let newClick = this.state[e.target.name] + 1;
    this.setState({
      [e.target.name]: newClick
    });
  }
  operationSelect(e) {
    e.preventDefault();
    let operation = e.target.value;
    this.setState({
      operation: operation
    });
  }

  render() {
    let val = this.state.operation;
    let newVal = this.state.firstVal + val.concat(this.state.secondVal);
    let answer = eval(newVal);
    return (
      <div className="Exercise">
        <h1>Exercise 2</h1>
        <div className="alert alert-info">
          Increment the number when you click on the buttons and display the result of the operation.
          <br />
          You can only use 3 states.
        </div>
        <form class="form-inline">
          <button name="firstVal" className="btn btn-primary mx-2" onClick={e => this.handleClick(e)}>
            {this.state.firstVal}
          </button>
          <select className="form-control mx-2" onChange={e => this.operationSelect(e)}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <button name="secondVal" className="btn btn-primary mx-2" onClick={e => this.handleClick(e)}>
            {this.state.secondVal}
          </button>
          = {answer}
        </form>
      </div>
    );
  }
}
