import React, { Component } from 'react'

export class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment() {
    // here object is passed inside this.setState()
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log(this.state.count, "Actual count value"); // this gives count value as per state (async call)
    //   }
    // )
    // console.log(this.state.count, "count"); // this gives immediate value as it is synchronous

    // here function is passed inside this.setState() to use prev state for updation
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))

  }

  incrementFive () {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={() => { this.increment() }}>Increment</button>
        <button onClick={() => { this.incrementFive() }}>Increment Five</button>
      </div>
    )
  }
}

export default Counter