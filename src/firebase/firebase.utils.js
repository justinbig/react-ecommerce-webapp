import firebase from "firebase/app"; //base mst be included if you want to use firebase in your APP

import "firebase/firestore"; //for database
import "firebase/auth";//for athentication


const config = {
    apiKey: "AIzaSyCFPJMy-C6hno7jeSL1oDX7RPfXCs2CdHI",
    authDomain: "mangar-db.firebaseapp.com",
    databaseURL: "https://mangar-db.firebaseio.com",
    projectId: "mangar-db",
    storageBucket: "",
    messagingSenderId: "1015110270340",
    appId: "1:1015110270340:web:db1dc042d12d0e53"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  //GOOGLE ATHENTICATIO SETUP
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;