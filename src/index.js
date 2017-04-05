import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'
import firebaseui from 'firebaseui'

import App from './App'
import './index.css'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDB-3Hz6XGhYI_m3s7V9jzo-7TCeTA26_8',
  authDomain: 'myday-1e6f2.firebaseapp.com',
  databaseURL: 'https://myday-1e6f2.firebaseio.com',
  projectId: 'myday-1e6f2',
  storageBucket: 'myday-1e6f2.appspot.com',
  messagingSenderId: '432497065369'
}

// FirebaseUI config.
const uiConfig = {
  signInSuccessUrl: 'www.google.co.th',
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
}

const ui = new firebaseui.auth.AuthUI(firebase.auth())

firebase.initializeApp(config)

// Initialize the FirebaseUI Widget using Firebase.
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig)

firebase.auth().onAuthStateChanged((response) => {
  const user = response
  console.log('kendojaa', user)
}, (error) => {
  console.log(error)
})

ReactDOM.render(
  <App user={{ displayName: 'kendo' }} />,
  document.getElementById('root')
)
