import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutputComp from './User/UserOutputComp';
import UserInputComp from './User/UserInputComp';

class App extends Component {
  state = {
    username: 'amitanand'
  };

  updateUsernameHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  clearUsernameHandler = () => {
    this.setState({
      username: ''
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <UserInputComp handle={(event) => this.updateUsernameHandler(event)} clearHandle={() => this.clearUsernameHandler()} name={this.state.username}></UserInputComp>
          <UserOutputComp name={this.state.username}></UserOutputComp>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
