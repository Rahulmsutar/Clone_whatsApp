import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAmkhSC3ENzEzhh2Xhjtg4h9Wd4AsgCSqE",
    authDomain: "whats-app-clone-8be43.firebaseapp.com",
    projectId: "whats-app-clone-8be43",
    storageBucket: "whats-app-clone-8be43.appspot.com",
    messagingSenderId: "534880844341",
    appId: "1:534880844341:web:9065804ddf2340f33d4f7c",
    measurementId: "G-73N0LMR4EM"
  };

  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  
  export { auth, provider};
  export default db;
