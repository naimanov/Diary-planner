import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCeN10aPvv0mnclLMVHjHLRb8lF9QJTHuI',
  authDomain: 'diary-planner-cb13b.firebaseapp.com',
  projectId: 'diary-planner-cb13b',
  storageBucket: 'diary-planner-cb13b.appspot.com',
  messagingSenderId: '656037197569',
  appId: '1:656037197569:web:853c0b326a285c98b5cd00',
  measurementId: 'G-EXD8H4TYQ5',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const callWithUserID = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
    }
  });
};
