import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCrPCcnZZXxvLlK4q48e_tgIm9OX-G-wz8",
    authDomain: "maxmart-bad0f.firebaseapp.com",
    databaseURL: "https://maxmart-bad0f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "maxmart-bad0f",
    storageBucket: "maxmart-bad0f.appspot.com",
    messagingSenderId: "1015395266508",
    appId: "1:1015395266508:web:afb9358910381dd5887769"
};

let fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
