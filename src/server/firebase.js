import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC9bbhp7Cap29-7aUM6BiuctwmTt3wrxC0',
  authDomain: 'app-ffb9e.firebaseapp.com',
  databaseURL: 'https://app-ffb9e.firebaseio.com',
  projectId: 'app-ffb9e',
  storageBucket: '',
  messagingSenderId: '901369793373',
};
export const firebaseApp = firebase.initializeApp(config);

// export const database = firebase.database().ref("users/");
export const database = firebase.database();
export const firebaseRef = '';
