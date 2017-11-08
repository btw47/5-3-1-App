import React from 'react';
import { firebaseApp, firebaseDb } from '../server/firebase';
import actionTypes from '../actionTypes';

//ACTION CREATORS-------------------
const updateProfile = () => {
  window.location = '/SetProfile';
};

export const loggedIn = () => {
  return {
    type: actionTypes.LOGGED_IN
  };
};

const authError = error => {
  return {
    type: actionTypes.AUTH_ERROR,
    payload: error
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
        if (firebaseOutput[pushList[i]].weight) {
          const date = firebaseOutput[pushList[i]].date;
          uploadList[date] = firebaseOutput[pushList[i]].oneRepMax;
          uploadList.push(firebaseOutput[pushList[i]]);
        }
      }

      console.log('FETCH OLD UPLOAD LIST', uploadList);

      let firstUpload = uploadList[0];

      dispatch({
        type: actionTypes.FETCH_OLD_STATS,
        userID: uid,
        fullName: firstUpload.fullName,
        weight: firstUpload.weight,
        date: firstUpload.date,
        ormBench: firstUpload.oneRepMax['benchORM'],
        ormDeadlift: firstUpload.oneRepMax['deadliftORM'],
        ormOverheadPress: firstUpload.oneRepMax['overheadPressORM'],
        ormSquat: firstUpload.oneRepMax['squatORM']
      });
    });
  };
}

export function fetchCalendar(thisUser) {
  return dispatch => {
    if (thisUser != null) {
      var uid = thisUser.uid;
    }

    firebaseDb.ref('users/' + uid).on('value', snapshot => {
      const firebaseOutput = snapshot.val();

      // console.log("FIREBASE OUTPUT", firebaseOutput)

      let pushList = [];
      for (let prop in firebaseOutput) {
        pushList.push(prop);
      }

      const uploadList = [];
      for (let i = 0; i < pushList.length; i++) {
        if (firebaseOutput[pushList[i]].calendar) {
          uploadList.push(firebaseOutput[pushList[i]]);
        }
      }

      // console.log("UPLOAD LIST", uploadList)

      const date = Date();
      const lastUpload = uploadList[uploadList.length - 1];
      // console.log("LAST UPLOAD", lastUpload)

      const selectedDay = lastUpload.calendar.selectedDay;
      const selectedWeekday = lastUpload.calendar.selectedWeekday;
      const selectedExercise = lastUpload.calendar.selectedExercise;

      dispatch({
        date: date,
        type: actionTypes.FETCH_CALENDAR,
        selectedDay: selectedDay,
        selectedWeekday: selectedWeekday,
        selectedExercise: selectedExercise
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

      //-----USER DESCRIPTION FETCH-----
      const descList = [];
      for (let i = 0; i < pushList.length; i++) {
        if (firebaseOutput[pushList[i]].desc) {
          descList.push(firebaseOutput[pushList[i]]);
        }
      }

      let lastDesc = descList[descList.length - 1];

      //-----GENERAL USER INFO-----
      const uploadList = [];
      for (let i = 0; i < pushList.length; i++) {
        if (firebaseOutput[pushList[i]].weight) {
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
        desc: lastDesc.desc
      });
    });
  };
}

export const loggedOut = () => {
  return dispatch => {
    return {
      type: actionTypes.LOGGED_OUT
    };
  };
};

export const fetchProgress = thisUser => {
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
        if (firebaseOutput[pushList[i]].weight) {
          const date = firebaseOutput[pushList[i]].date;
          // uploadList[date] = firebaseOutput[pushList[i]].oneRepMax;
          uploadList.push(firebaseOutput[pushList[i]]);
        }
      }

      console.log('UPLOAD LIST', uploadList);

      const progressData = uploadList.map(a => {
        const smallDate = a.date.split(' ').slice(1, 3);
        const joinDate = smallDate.join(' ');
        const fullDate = `${joinDate}, ${a.date.split(' ').slice(3, 4)}`;
        const rawDat = {};
        rawDat['name'] = fullDate;
        rawDat['Bench (ORM)'] = a.oneRepMax['benchORM'];
        rawDat['Squat (ORM)'] = a.oneRepMax['squatORM'];
        rawDat['Overhead Press (ORM)'] = a.oneRepMax['overheadPressORM'];
        rawDat['Deadlift (ORM)'] = a.oneRepMax['deadliftORM'];
        rawDat['Weight'] = a.weight;
        return rawDat;
      });

      console.log('PROGRESS DATA', progressData);

      dispatch({
        type: actionTypes.FETCH_PROGRESS,
        payload: progressData
      });
    });
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

      if (lastUpload === undefined) {
        dispatch({
          type: actionTypes.NO_PROFILE_IMAGE
        });
      } else {
        dispatch({
          type: actionTypes.PROFILE_IMAGE,
          payload: lastUpload.profileImage
        });
      }
    });
  };
};
