import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  const auth = firebase.auth();

  // let user = firebase.auth().currentUser;
  // let uid;
  // if (user !== null) {
  //   uid = user.uid;
  // }

  // console.log(user);

  return (
    <AuthContext.Provider value={{ auth }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
