import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAFaLnt1SLrDUOMkiKpSQnTZwqWu95-dSc",
  authDomain: "linkedin-clone-c7c02.firebaseapp.com",
  projectId: "linkedin-clone-c7c02",
  storageBucket: "linkedin-clone-c7c02.appspot.com",
  messagingSenderId: "795988825115",
  appId: "1:795988825115:web:0100b9ad4dc640867f94be",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
