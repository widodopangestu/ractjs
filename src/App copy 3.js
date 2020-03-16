import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "www.javatpoint.com"
    };
  }
  handleEvent = () => {
    console.log(this.props);
  };
  render() {
    return (
      <div className="App">
        <h2>React Constructor Example</h2>
        <input type="text" value={this.state.data} readOnly={true} />
        <button onClick={this.handleEvent}>Please Click</button>
      </div>
    );
  }
}
export default App;
