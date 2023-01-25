import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDUNJmlaBRL1gVvXQ5wPH8edHzBWOOebAA",
  authDomain: "esymweb-chat.firebaseapp.com",
  projectId: "esymweb-chat",
  storageBucket: "esymweb-chat.appspot.com",
  messagingSenderId: "946026615660",
  appId: "1:946026615660:web:957ed98b870bd538ca5949"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
