import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase'
import firebaseui from 'firebaseui'

// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: 'www.google.co.th',
  signInOptions: [
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);

let user
firebase.auth().onAuthStateChanged(function(response) {
  user = response
}, function(error) {
  console.log(error);
});

ReactDOM.render(
  <App user={user}/>,
  document.getElementById('root')
);
