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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

