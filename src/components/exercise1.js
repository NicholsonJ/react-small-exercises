import React, { Component } from 'react';

export default class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: 0
    };
  }
  handleClick(e) {
    let newClick = this.state.click + 1;
    this.setState({
      click: newClick
    });
  }

  render() {
    return (
      <div className="Exercise">
        <h1>Exercise 1</h1>
        <div className="alert alert-info">Increment the number of like when you click on it</div>
        <button className="btn btn-primary" onClick={e => this.handleClick(e)}>
          {this.state.click} likes
        </button>
      </div>
    );
  }
}
