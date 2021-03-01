import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAKpwgc67ePNVC8IqaiGvSAonsB5xYII3I",
  authDomain: "discord-clone-72cf6.firebaseapp.com",
  projectId: "discord-clone-72cf6",
  storageBucket: "discord-clone-72cf6.appspot.com",
  messagingSenderId: "895733720231",
  appId: "1:895733720231:web:ce372aca78630dfa596782",
  measurementId: "G-BRS8JSFNQ8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
