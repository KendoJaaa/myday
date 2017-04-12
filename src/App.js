import './App.css'

import React, { Component } from 'react'
import logo from './logo.svg'
import LoginPage from './LoginPage'
import HomePage from './HomePage'

class App extends Component {
  renderContent () {
    switch (window.location.pathname) {
    case '/home': {
      return <HomePage />
    }
    default : {
      return <LoginPage />
    }}
  }

  render () {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to MyDay</h2>
        </div>
        {this.renderContent()}
      </div>

    )
  }
}

export default App
