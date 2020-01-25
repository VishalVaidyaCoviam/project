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
<<<<<<< HEAD
const auth = firebase.auth()
var Googleprovider = new firebase.auth.GoogleAuthProvider();
var Facebookprovider = new firebase.auth.FacebookAuthProvider();
// Googleprovider.addScope('https://www.googleapis.com/auth/contacts.readonly');
=======

const auth = firebase.auth()
var Googleprovider = new firebase.auth.GoogleAuthProvider();

var Facebookprovider = new firebase.auth.FacebookAuthProvider();
// Googleprovider.addScope('https://www.googleapis.com/auth/contacts.readonly');

>>>>>>> d0cefc6d50f71b11c43387a5b5f571cc103a33fd
export {
    auth,
    Googleprovider,
    Facebookprovider
}