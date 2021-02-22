import firebase from "firebase";

var firebaseConfig = {
    // apiKey: "AIzaSyCrPCcnZZXxvLlK4q48e_tgIm9OX-G-wz8",
    // authDomain: "maxmart-bad0f.firebaseapp.com",
    // databaseURL: "https://maxmart-bad0f-default-rtdb.europe-west1.firebasedatabase.app",
    // projectId: "maxmart-bad0f",
    // storageBucket: "maxmart-bad0f.appspot.com",
    // messagingSenderId: "1015395266508",
    // appId: "1:1015395266508:web:afb9358910381dd5887769"

    apiKey: "AIzaSyBbykxrcxQgJvBMSzTqlYf9SN99v29hpT0",
    authDomain: "maxmart-e4a02.firebaseapp.com",
    databaseURL: "https://maxmart-e4a02-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "maxmart-e4a02",
    storageBucket: "maxmart-e4a02.appspot.com",
    messagingSenderId: "479270629182",
    appId: "1:479270629182:web:b315bcc200fea2c963866f"
};


let fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
// export default fireDb;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
