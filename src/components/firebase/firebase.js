//https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyALI7kdPYqlK0h4sMWW5Db8IRazyDshF64",
  authDomain: "move-to-colorado-1521834386670.firebaseapp.com",
  databaseURL: "https://move-to-colorado-1521834386670.firebaseio.com",
  projectId: "move-to-colorado-1521834386670",
  storageBucket: "move-to-colorado-1521834386670.appspot.com",
  messagingSenderId: "546398583974"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};