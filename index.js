import React, { Component, unstable_Profiler as Profiler } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Outdated Profiler Example!',
      counter: 0,
    };
  }

  callback = (
    id, // the "id" prop of the Profiler tree that has just committed
    phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration, // time spent rendering the committed update
    baseDuration, // estimated time to render the entire subtree without memoization
    startTime, // when React began rendering this update
    commitTime, // when React committed this update
    interactions
  ) => {
    console.log('I am re-rendering...!', phase);
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div id="main">
        <Profiler id="main" onRender={this.callback}>
          <h3>{this.state.name}</h3>
          Counter : {this.state.counter}
          <p />
          <button onClick={this.handleClick}>PingPong</button>
        </Profiler>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
