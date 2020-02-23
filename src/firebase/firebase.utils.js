import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBU7XvkSpFUzKvL4S5jV5uWtXZku8xiNPo",
    authDomain: "e-commerce-db-bf74d.firebaseapp.com",
    databaseURL: "https://e-commerce-db-bf74d.firebaseio.com",
    projectId: "e-commerce-db-bf74d",
    storageBucket: "e-commerce-db-bf74d.appspot.com",
    messagingSenderId: "148529875860",
    appId: "1:148529875860:web:fcaaaaff79bd1814481d81",
    measurementId: "G-JQ6SQEL8JT"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot =await userRef.get();

    if(!snapShot.exists){
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
            console.log('error creating user', error.message)
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

