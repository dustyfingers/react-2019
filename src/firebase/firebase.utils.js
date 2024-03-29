import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCaa0AlkVnq3L7dA0G9twbj0NTi5bzuipA",
    authDomain: "crwn-db-30271.firebaseapp.com",
    databaseURL: "https://crwn-db-30271.firebaseio.com",
    projectId: "crwn-db-30271",
    storageBucket: "",
    messagingSenderId: "711576872578",
    appId: "1:711576872578:web:1693fafc11b06242"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (err) {
            console.log('error creating user', err);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

// auth and firebase methods imported above, for access to db and authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google auth provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;