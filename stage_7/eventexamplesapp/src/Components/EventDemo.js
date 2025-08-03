import React from 'react';

class EventDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.sayHello = this.sayHello.bind(this);
  }

  handleIncrement() {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  sayHello() {
    console.log('Hello! You clicked the Increment button');
  }

  handleMultipleMethods = () => {
    this.handleIncrement();
    this.sayHello();
  }

  sayMessage(message) {
    alert(`Message: ${message}`);
  }

  handleSyntheticEvent = (e) => {
    e.preventDefault(); 
    alert('I was clicked');
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h2>React Event Handling Lab</h2>
        <p>Counter: {this.state.counter}</p>

        <button onClick={this.handleMultipleMethods}>Increment</button>
        <button onClick={() => this.setState({ counter: this.state.counter - 1 })}>Decrement</button>

        <button onClick={() => this.sayMessage('Welcome')}>Say Welcome</button>

        <button onClick={this.handleSyntheticEvent}>OnPress</button>
      </div>
    );
  }
}

export default EventDemo;