import * as firebase from 'firebase';
import * as admin from 'firebase-admin';
import serviceAccount from './serviceAccount.json';

//-----FIREBASE DB SETUP-----
var config = {
  apiKey: 'AIzaSyC9bbhp7Cap29-7aUM6BiuctwmTt3wrxC0',
  authDomain: 'app-ffb9e.firebaseapp.com',
  databaseURL: 'https://app-ffb9e.firebaseio.com',
  projectId: 'app-ffb9e',
  storageBucket: 'gs://app-ffb9e.appspot.com/',
  messagingSenderId: '901369793373'
};

export const firebaseApp = firebase.initializeApp(config);
export const firebaseAuth = firebaseApp.auth();
export const firebaseStorageRef = firebase.storage().ref();
export const firebaseDb = firebaseApp.database();

//-----FIREBASE ADMIN-----

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://app-ffb9e.firebaseio.com'
});
