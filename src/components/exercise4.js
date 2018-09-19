import React, { Component } from 'react';

export default class Exercise4 extends Component {
  render() {
    return (
      <div className="Exercise">
        <h1>Exercise 4</h1>
        <div className="alert alert-info">
          When the user type some information in the input, it should change the list of prime numbers.
        </div>
        <Application />
      </div>
    );
  }
}

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 42
    };
  }
  handleChange(e) {
    let val = e.target.value;
    this.setState({
      x: val
    });
  }

  render() {
    return (
      <div className="border">
        <h2>Application</h2>
        <BigInput onChange={e => this.handleChange(e)} />
        <DisplayPrimeNumbers limit={this.state.x} />
      </div>
    );
  }
}

class BigInput extends Component {
  render() {
    return (
      <div className="border">
        <h2>BigInput</h2>
        limit = <input type="number" onChange={e => this.props.onChange(e)} />
      </div>
    );
  }
}

class DisplayPrimeNumbers extends Component {
  render() {
    let primeNumbers = [];
    for (let n = 2; n <= this.props.limit; n++) {
      let isNPrime = true;
      for (let index = 0; index < primeNumbers.length && isNPrime; index++) {
        if (n % primeNumbers[index] === 0) isNPrime = false;
      }
      if (isNPrime) primeNumbers.push(n);
    }
    return (
      <div className="border">
        <h2>DisplayPrimeNumbers</h2>
        <strong>Prime numbers until limit = {this.props.limit}</strong>
        <br />
        {primeNumbers.map(n => (
          <span key={n}>{n} </span>
        ))}
      </div>
    );
  }
}
