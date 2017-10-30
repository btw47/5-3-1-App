import actionTypes from '../actionTypes';
import firebase from 'firebase';
import { firebaseApp, firebaseDb } from '../server/firebase';
import { store } from '../index.js';

//ACTION CREATORS-------------------
const updateProfile = () => {
  window.location = '/SetProfile';
};

export const loggedIn = () => {
  return {
    type: actionTypes.LOGGED_IN,
  };
};

const authError = error => {
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

export function fetchOldStats(thisUser, time) {
  switch (time) {
    case 'lastWeek':
      console.log('YUS BITCH');
    default:
      console.log('YOU WROTE IT WRONG IDIOT');
  }

  return dispatch => {
    if (thisUser != null) {
      var uid = thisUser.uid;
    }

    firebaseDb.ref('users/' + uid).on('value', snapshot => {
      const firebaseOutput = snapshot.val();

      let pushList = [];
      for (let prop in firebaseOutput) {
        pushList.push(prop);
      }

      const uploadList = pushList.map(a => {
        return firebaseOutput[a];
      });

      let lastUpload = uploadList[uploadList.length - 1];

      dispatch({
        type: actionTypes.FETCH_OLD_STATS,
        userID: uid,
        weight: lastUpload.weight,
        ormBench: lastUpload.oneRepMax['benchORM'],
        ormDeadlift: lastUpload.oneRepMax['deadliftORM'],
        ormOverheadPress: lastUpload.oneRepMax['overheadPressORM'],
        ormSquat: lastUpload.oneRepMax['squatORM'],
      });
    });
  };
}

export function fetchUser(thisUser) {
  return dispatch => {
    if (thisUser != null) {
      var uid = thisUser.uid;
    }

    firebaseDb.ref('users/' + uid).on('value', snapshot => {
      const firebaseOutput = snapshot.val();

      let pushList = [];
      for (let prop in firebaseOutput) {
        pushList.push(prop);
      }

      const uploadList = [];
      for (let i = 0; i < pushList.length; i++) {
        if (!firebaseOutput[pushList[i]].profileImage) {
          uploadList.push(firebaseOutput[pushList[i]]);
        }
      }

      let lastUpload = uploadList[uploadList.length - 1];

      dispatch({
        type: actionTypes.FETCH_USER,
        userID: uid,
        fullName: lastUpload.fullName,
        weight: lastUpload.weight,
        ormBench: lastUpload.oneRepMax['benchORM'],
        ormDeadlift: lastUpload.oneRepMax['deadliftORM'],
        ormOverheadPress: lastUpload.oneRepMax['overheadPressORM'],
        ormSquat: lastUpload.oneRepMax['squatORM'],
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

//-----Filestack-----
export const fetchProfileImage = uid => {
  return dispatch => {
    firebaseDb.ref('users/' + uid).on('value', snapshot => {
      const firebaseOutput = snapshot.val();

      let pushList = [];
      for (let prop in firebaseOutput) {
        pushList.push(prop);
      }

      const uploadList = [];
      for (let i = 0; i < pushList.length; i++) {
        if (firebaseOutput[pushList[i]].profileImage) {
          uploadList.push(firebaseOutput[pushList[i]]);
        }
      }

      let lastUpload = uploadList[uploadList.length - 1];
      console.log('LAST UPLOAD', lastUpload);

      dispatch({
        type: actionTypes.PROFILE_IMAGE,
        payload: lastUpload.profileImage,
      });
    });
  };
};

export const noProfileImage = () => {
  return {
    type: actionTypes.NO_PROFILE_IMAGE,
  };
};
