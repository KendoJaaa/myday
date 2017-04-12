
import firebase from 'firebase'
import React, { Component } from 'react'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount () {
    firebase.auth().onAuthStateChanged((response) => {
      this.setState({ user: response })
      return firebase.database().ref('/' + response.uid).once('value').then(function(snapshot) {
        console.log('kendo jaa data', snapshot.val())

      })
    }, (error) => {
      console.log(error)
    })
  }
  render () {
    console.log('kendo jaa user',this.state.user)
    return (
      <div className='md-home-page'>
        Your name is {this.state.user.displayName}
      </div>
    )
  }
}

export default HomePage
