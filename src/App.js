import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  static propTypes = {
    user: React.PropTypes.object
  }

  onClick = () => {
    console.log('kendo jaa')
  }

  renderUserInfo = () => {
    return this.props.user && (
      <div>
        <div>SignedInJa</div>
        <div>{this.props.user.displayName}</div>
      </div>
    )
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MyDay</h2>
        </div>
        <div id="firebaseui-auth-container"></div>
        {this.renderUserInfo()}
      </div>

    );
  }
}

export default App;
