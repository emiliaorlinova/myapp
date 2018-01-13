import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isButtonVisible: true,
    };
  }
  handleHideButton() {
    this.setState({ isButtonVisible: false });
  }
  render() {
    const isButtonVisible = this.state.isButtonVisible;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React App</h1>
        </header>
        <Button label={'eat'} isVisible={isButtonVisible} onPress={() => this.handleHideButton()} />
        <Button
          label={'spit'}
          isVisible={isButtonVisible}
          onPress={() => this.handleHideButton()}
        />
      </div>
    );
  }
}

export default App;
