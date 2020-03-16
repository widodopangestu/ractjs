import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "www.javatpoint.com"
    };
    this.forceUpdateState = this.forceUpdateState.bind(this);
  }
  handleEvent = () => {
    console.log(this.props);
  };
  forceUpdateState() {
    this.forceUpdate();
  }
  render() {
    return (
      <div className="App">
        <h2>React Constructor Example</h2>
        <input type="text" value={this.state.data} readOnly={true} />
        <button onClick={this.handleEvent}>Please Click</button>
        <h1>Example to generate random number</h1>
        <h3>Random number: {Math.random()}</h3>
        <button onClick={this.forceUpdateState}>ForceUpdate</button>
      </div>
    );
  }
}
export default App;
