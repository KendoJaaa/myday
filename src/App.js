import './App.css'
import firebase from 'firebase'

import React, { Component } from 'react'
import LoginPage from './LoginPage'
import Login from './Login.js'
import InApp from './InApp.js'


class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      questions: ['kak','digimon']
    }
  }
  componentDidMount () {
    firebase.auth().onAuthStateChanged((response) => {
      this.setState({ user: response })
    }, (error) => {
      console.log(error)
    })
  }

  render () {
    console.log('kendo ja app', this.state.user)
    return (
      <div className="App">
        <div className="App-header">
          <Login user={this.state.user} />
        </div>
        {this.state.user ? <InApp user={this.state.user}/> : <LoginPage />}
      </div>

    )
  }
}

export default App
