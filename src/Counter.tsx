import React, { Component } from 'react';

// Step 1: Define interfaces for props and state (props are empty here)
interface CounterProps {}

interface CounterState {
  count: number; // count state is a number
}

// Step 2: Extend the Component with generic types for props and state
class Counter extends Component<CounterProps, CounterState> {
  // Step 3: Initialize state with type safety
  state: CounterState = {
    count: 0
  };

  // Step 4: Define increment method as an arrow function to bind `this`
  increment = () => {
    // Step 5: Update state with the new count value
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {/* Step 6: Access state with this.state */}
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
