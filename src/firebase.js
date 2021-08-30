import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCPAdR2QYe8_FMCxRira9DT8S6az4M_ttY",
  authDomain: "disney-clone-7d3ba.firebaseapp.com",
  projectId: "disney-clone-7d3ba",
  storageBucket: "disney-clone-7d3ba.appspot.com",
  messagingSenderId: "255669294702",
  appId: "1:255669294702:web:d7b4510c8d39e55d24b87f",
  measurementId: "G-4YZKWC1KHL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initialize firebase
const db = firebaseApp.firestore(); //connecting to data base
const auth = firebase.auth(); //for authentication
const provider = new firebase.auth.GoogleAuthProvider(); //google authentication for when logging in or sining up
const storage = firebase.storage(); //for storing

export { auth, provider, storage };
export default db;
