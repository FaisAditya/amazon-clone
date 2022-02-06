import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2CDSwKtocGQaYVsKLqYShWfG-cgrzUE4",
  authDomain: "clone-d40e4.firebaseapp.com",
  projectId: "clone-d40e4",
  storageBucket: "clone-d40e4.appspot.com",
  messagingSenderId: "626530066345",
  appId: "1:626530066345:web:1b504b958e0f264cc7eeb8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
