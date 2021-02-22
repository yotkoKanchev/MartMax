// import firebase from './../firebase'
import firebase from "firebase";

let token = '';

function login(data) {
    const email = data.email;
    const password = data.password;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user.l)
            var token = user.l;
            localStorage.setItem("token", token);
            localStorage.setItem("user", email);
            // ...
        })
        .catch((error) => {
            console.log(error)
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        token = '';
        localStorage.clear();
        // redirect to home
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function isAuthenticated() {
    let currentToken = localStorage.getItem('token');
    var user = localStorage.getItem('user');

    if (user === "maxmartoffice@gmail.com" && token === currentToken) {
        return true;
    }

    return false;
}

function getToken() {
    firebase.auth().currentUser.getIdToken()
        .then((token) => {
            token = token;
        })

    return token;
}

export default {
    login,
    logout,
    isAuthenticated,
    getToken,
    token
}