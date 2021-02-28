import { fireDb } from './firebase';

export const readFromDb = (collection, setFunction, child) => {
    let data = localStorage.getItem('firebase_data');

    if (!data) {
        console.log('Read from Db')
        fireDb.on('value', snapshot => {
            const values = snapshot.val();
            localStorage.setItem('firebase_data', JSON.stringify(values));

            if (!child) {
                setFunction(values[collection])
            } else {
                setFunction(values[collection][child]);
            }
        })
    } else {
        console.log("Read from localStorage")
        if (!child) {
            setFunction(JSON.parse(data)[collection])
        } else {
            setFunction(JSON.parse(data)[collection][child]);
        }
    }
}

