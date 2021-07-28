import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCDJM3xBNp97RcQVNjyFz49giVz5XDIg1o",
  authDomain: "tinder-801c5.firebaseapp.com",
  projectId: "tinder-801c5",
  storageBucket: "tinder-801c5.appspot.com",
  messagingSenderId: "461148300283",
  appId: "1:461148300283:web:499e45b05807c2eafd615e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
