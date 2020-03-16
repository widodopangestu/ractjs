import React from "react";
import PropTypes from "prop-types";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Widodo Pangestu",
      displayBio: true,
      data: [
        {
          name: "Abhishek"
        },
        {
          name: "Saharsh"
        },
        {
          name: "Ajay"
        }
      ]
    };
    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  }
  toggleDisplayBio() {
    this.setState({ displayBio: !this.state.displayBio });
  }
  render() {
    return (
      <div>
        <h1>ReactJS Props validation example</h1>
        <table>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Valid</th>
            </tr>
            <tr>
              <td>Array</td>
              <td>{this.props.propArray}</td>
              <td>{this.props.propArray ? "true" : "False"}</td>
            </tr>
            <tr>
              <td>Boolean</td>
              <td>{this.props.propBool ? "true" : "False"}</td>
              <td>{this.props.propBool ? "true" : "False"}</td>
            </tr>
            <tr>
              <td>Function</td>
              <td>{this.props.propFunc(5)}</td>
              <td>{this.props.propFunc(5) ? "true" : "False"}</td>
            </tr>
            <tr>
              <td>String</td>
              <td>{this.props.propString}</td>
              <td>{this.props.propString ? "true" : "False"}</td>
            </tr>
            <tr>
              <td>Number</td>
              <td>{this.props.propNumber}</td>
              <td>{this.props.propNumber ? "true" : "False"}</td>
            </tr>
          </tbody>
        </table>
        <h1> Welcome to {this.props.name} </h1>
        <JTP jtpProp={this.state.name} />
        {this.state.displayBio ? (
          <div>
            <p>
              Javatpoint is one of the best Java training institute in Noida,
              Delhi, Gurugram, Ghaziabad and Faridabad. We have a team of
              experienced Java developers and trainers from multinational
              companies to teach our campus students.
            </p>
            <button onClick={this.toggleDisplayBio}> Show Less </button>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}> Read More </button>
          </div>
        )}
        <First />
        <Second />
        <StudentName />
        <ul>
          {this.state.data.map((item, i) => (
            <List key={i} data={item} />
          ))}
        </ul>
      </div>
    );
  }
}
App.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string
};
App.defaultProps = {
  propArray: [1, 2, 3, 4, 5],
  propBool: true,
  propFunc: function(x) {
    return x + 5;
  },
  propNumber: 1,
  propString: "JavaTpoint",
  name: "JavaTpoint"
};

class JTP extends React.Component {
  render() {
    return (
      <div>
        <h1>State & Props Example</h1>
        <h3>Welcome to {this.props.jtpProp}</h3>
        <p>
          Javatpoint is one of the best Java training institute in Noida, Delhi,
          Gurugram, Ghaziabad and Faridabad.
        </p>
      </div>
    );
  }
}
class StudentName extends React.Component {
  render() {
    return (
      <div>
        <h1>Student Name Detail</h1>
      </div>
    );
  }
}
class List extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.data.name}</li>
      </ul>
    );
  }
}
class First extends React.Component {
  render() {
    return (
      <div>
        <h1>JavaTpoint</h1>
      </div>
    );
  }
}
class Second extends React.Component {
  render() {
    return (
      <div>
        <h2>www.javatpoint.com</h2>
        <p>This websites contains the great CS tutorial.</p>
      </div>
    );
  }
}

export default App;
