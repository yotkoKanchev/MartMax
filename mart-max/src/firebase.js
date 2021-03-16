import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

var firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

export const fireDb = firebase.database().ref();

export const fetchData = (collection, setFunction, child) => {
    let data = localStorage.getItem('firebase_data');

    if (!data) {
        readFromDb(collection, setFunction, child);
    } else {
        const setDate = JSON.parse(localStorage.getItem('setDate'));

        if (setDate) {
            const currentDate = new Date();
            const diffTime = Math.abs(currentDate.getTime() - setDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            // clear localStorage and read data from DB
            if (diffDays >= 7) {
                localStorage.clear();
                readFromDb(collection, setFunction, child);
            } else {
                readFromLocalStorage(data, collection, setFunction, child);
            }
        } else {
            localStorage.clear();
            readFromDb(collection, setFunction, child);
        }
    }
}

export const editData = (collection, child, obj) => {
    if (child) {
        fireDb.child(collection).child(child).set(
            obj,
            err => {
                console.log(err);
            }
        )
    } else {
        fireDb.child(collection).set(
            obj,
            err => {
                console.log(err);
            }
        )
    }
    localStorage.clear()
}

export const appAuth = firebase.auth();

export const signOut = () => {
    firebase.auth().signOut();
    localStorage.clear();
}

const readFromDb = (collection, setFunction, child) => {
    console.log('Read from Db')
    fireDb.on('value', snapshot => {
        const values = snapshot.val();
        localStorage.setItem('firebase_data', JSON.stringify(values));
        const now = new Date();
        localStorage.setItem('setDate', JSON.stringify(now.getTime()));

        if (!child) {
            setFunction(values[collection])
        } else {
            setFunction(values[collection][child]);
        }
    })
}

const readFromLocalStorage = (data, collection, setFunction, child) => {
    console.log("Read from localStorage")
    if (!child) {
        setFunction(JSON.parse(data)[collection])
    } else {
        setFunction(JSON.parse(data)[collection][child]);
    }
}
