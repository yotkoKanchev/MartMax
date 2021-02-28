import { fireDb } from './firebase';

export const readFromDb = (collection, setFunction, child) => {

    let resultFromLocalstorage = localStorage.getItem(collection);

    if (!resultFromLocalstorage) {
        console.log("Read from LocalStorage")
        fireDb.child(collection).on('value', snapshot => {
            const values = { ...snapshot.val() }
            localStorage.setItem(collection, JSON.stringify(values));
            if (!child) {
                setFunction(values)
            } else {
                setFunction(values[child]);
            }
        })
    } else {
        console.log("Read from LocalStorage")
        if (!child) {
            setFunction(JSON.parse(resultFromLocalstorage))
        } else {
            setFunction(JSON.parse(resultFromLocalstorage)[child]);
        }
    }
}
