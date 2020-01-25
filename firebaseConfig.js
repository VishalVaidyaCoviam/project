import firebase from 'firebase'
import 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDybhuVCmZpqFWvvoeL6ugBK40CH4ZU7k8",
    authDomain: "drunkensoul.firebaseapp.com",
    databaseURL: "https://drunkensoul.firebaseio.com",
    projectId: "drunkensoul",
    storageBucket: "drunkensoul.appspot.com",
    messagingSenderId: "157223350732",
    appId: "1:157223350732:web:49ee24113efd96f937ed69",
    measurementId: "G-K444SM89WM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth()
var Googleprovider = new firebase.auth.GoogleAuthProvider();

var Facebookprovider = new firebase.auth.FacebookAuthProvider();
// Googleprovider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export {
    auth,
    Googleprovider,
    Facebookprovider
}