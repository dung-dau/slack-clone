// import firebase from "firebase";
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCOaTsATgqdkyqAqNfby1AooqD90TVxIN0",
    authDomain: "slack-clone-5e2e0.firebaseapp.com",
    projectId: "slack-clone-5e2e0",
    storageBucket: "slack-clone-5e2e0.appspot.com",
    messagingSenderId: "570236163081",
    appId: "1:570236163081:web:cc2c964de09160acbd14d8"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig); 
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);
const provider=new GoogleAuthProvider()

export { auth, provider, db };