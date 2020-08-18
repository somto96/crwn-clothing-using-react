import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDTgcsr6qPXlSY-7TZypdM84xzQxFsyn6w",
    authDomain: "crwn-db-29f1e.firebaseapp.com",
    databaseURL: "https://crwn-db-29f1e.firebaseio.com",
    projectId: "crwn-db-29f1e",
    storageBucket: "crwn-db-29f1e.appspot.com",
    messagingSenderId: "1006747161715",
    appId: "1:1006747161715:web:48725d9223817e2d180606",
    measurementId: "G-L21JGPWLMG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;