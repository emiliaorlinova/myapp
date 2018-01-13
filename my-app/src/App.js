import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Dog from './components/Dog';
import Cucumber from './cucumber.jpg';
const styles = {
  cucumber: {
    width: '150px',
    height: '200px',
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogHasEaten: false,
    };
  }
  handleEat() {
    this.setState({ dogHasEaten: true });
  }
  handleSpit() {
    this.setState({ dogHasEaten: false });
  }
  render() {
    const { dogHasEaten } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React App</h1>
        </header>
        <Dog hasEaten={dogHasEaten} />
        {!dogHasEaten && <img src={Cucumber} style={styles.cucumber} />}
        <Button label={'eat'} isVisible={!dogHasEaten} onPress={() => this.handleEat()} />
        <Button label={'spit'} isVisible={dogHasEaten} onPress={() => this.handleSpit()} />
      </div>
    );
  }
}

export default App;
