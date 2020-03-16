import React from "react";
import "./App.css";
import styles from './myStyles.module.css'; 
class App extends React.Component {
  render() {
    return (
      <div>
      <h1 className={styles.mystyle}>Home</h1>  
      <p className={styles.parastyle}>It provides great CS tutorials.</p>  
      </div>  
    );
  }
}
export default App;
