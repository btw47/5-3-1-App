import actionTypes from '../actionTypes';
import { firebaseApp, firebaseDb } from '../server/firebase';

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
        ormBench: firstUpload.oneRepMax['benchORM'],
        ormDeadlift: firstUpload.oneRepMax['deadliftORM'],
        ormOverheadPress: firstUpload.oneRepMax['overheadPressORM'],
        ormSquat: firstUpload.oneRepMax['squatORM'],
      });
    });
  };
}

export function fetchCalendar(thisUser){
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
        if (firebaseOutput[pushList[i]].selectedDay) {
          uploadList.push(firebaseOutput[pushList[i]]);
        }
      }

      const lastUpload = uploadList[uploadList.length - 1]

      const selectedDay = lastUpload["selectedDay"]
      const selectedWeekdays = lastUpload["selectedWeekdays"]
      const selectedExercise = lastUpload["selectedExercise"]
      
    dispatch({
      type: actionTypes.FETCH_CALENDAR, 
      calendar:{
      selectedDay: selectedDay,
      selectedWeekday: selectedWeekdays,
      selectedExercise: selectedExercise,
      }
    })
    })
  }
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

      if (lastUpload === undefined) {
        dispatch({
          type: actionTypes.NO_PROFILE_IMAGE,
        });
      } else {
        dispatch({
          type: actionTypes.PROFILE_IMAGE,
          payload: lastUpload.profileImage,
        });
      }
    });
  };
};

