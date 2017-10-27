import actionTypes from '../actionTypes';
import firebase from 'firebase';
import { firebaseApp, firebaseDb } from '../server/firebase';
import { store } from '../index.js';

//ACTION CREATORS-------------------
const updateProfile = () => {
  window.location = '/UpdateProfile';
};

export const loggedIn = () => {
  console.log('LOGGED IN ACTION');
  return {
    type: actionTypes.LOGGED_IN,
  };
};

const authError = error => {
  console.log('AUTH ERROR ACTIONS');
  return {
    type: actionTypes.AUTH_ERROR,
    payload: error,
  };
};

//------------------------------------

export const userLogIn = (email, password) => {
  return dispatch => {
    firebaseApp
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        dispatch(authError(error));
      });
  };
};

export const createUser = (email, password) => {
  return dispatch => {
    firebaseApp
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => updateProfile())
      .catch(error => {
        dispatch(authError(error));
      });
  };
};

export function fetchUser(thisUser) {
  console.log('FETCH USER INFO');
  return dispatch => {
    if (thisUser != null) {
      var uid = thisUser.uid;
    }

    firebaseDb.ref('users/' + uid).on('value', snapshot => {
      console.log('SNAPSHOT', snapshot.val());
      const firebaseORM = snapshot.val().oneRepMax;

      let liftList = [];
      for (let lift in firebaseORM) {
        liftList.push(lift);
      }

      const liftStats = liftList.map(a => {
        let ormLift = {};
        let liftName = a;
        ormLift[liftName] = firebaseORM[a];
        return ormLift;
      });

      dispatch({
        type: actionTypes.FETCH_USER,
        userID: uid,
        fullName: snapshot.val().fullName,
        weight: snapshot.val().weight,
        ormBench: firebaseORM['benchORM'],
        ormDeadlift: firebaseORM['deadliftORM'],
        ormOverheadPress: firebaseORM['overheadPressORM'],
        ormSquat: firebaseORM['squatORM'],
      });
    });
  };
}

export const loggedOut = () => {
  return dispatch => {
    return {
      type: actionTypes.LOGGED_OUT,
    };
  };
};
