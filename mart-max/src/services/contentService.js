import firebaseDb from '../firebase'

export default {
    heating: {
        get: () => firebaseDb.child('heating').push()
    }
}