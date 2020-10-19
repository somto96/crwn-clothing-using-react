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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    // console.log(userRef);
    const snapShot = await userRef.get();
    // console.log(snapShot);
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error);
        }
    }

    return userRef;
};

// Gives access to the google auth class
const provider = new firebase.auth.GoogleAuthProvider();
// Triggers the google pop up for auth and sign in
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;