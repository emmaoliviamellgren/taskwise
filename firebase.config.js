import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBx9Q806wrxKL5nHq-yVbztoi-LQFEid24",
    authDomain: "todo-with-next-f3121.firebaseapp.com",
    projectId: "todo-with-next-f3121",
    storageBucket: "todo-with-next-f3121.appspot.com",
    messagingSenderId: "243937507467",
    appId: "1:243937507467:web:b728a5b8e09f54880e3c8e",
};

// Singleton: If there is an app already created, get app. Else, establish a new connection to firebase (Initialize Firebase). Prevents multiple connections.
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// For communication with firestore
export const db = getFirestore(app)
