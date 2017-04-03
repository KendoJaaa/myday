import './App.css'

import React, { Component } from 'react'

import logo from './logo.svg'

class App extends Component {
  static propTypes = {
    users: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    isUserOnlineById: React.PropTypes.func.isRequired,
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

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MyDay</h2>
        </div>
        <div id="firebaseui-auth-container"></div>
        {this.renderUserInfo()}
      </div>

    )
  }
}

export default App
