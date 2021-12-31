import firebase from "firebase/compat/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyCGlj4rLzybI2-OUW20OIlNveuEHsigGP8",
    authDomain: "crwn-db-71f8a.firebaseapp.com",
    projectId: "crwn-db-71f8a",
    storageBucket: "crwn-db-71f8a.appspot.com",
    messagingSenderId: "83133205169",
    appId: "1:83133205169:web:4deb8ce2c912ae0a99f090",
    measurementId: "G-Z29KVVL4CR"
  };

  firebase.initializeApp(config)


  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase