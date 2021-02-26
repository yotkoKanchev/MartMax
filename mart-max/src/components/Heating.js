import React, { useState, useEffect, Component } from 'react'
import Page from './shared/Page'

import { fireDb } from './../firebase';

const Heating = () => {
    var [heatingInfo, setHeatingInfo] = useState({})

    useEffect(() => {
        fireDb.child('menus').child('heating').on('value', snapshot => {
            setHeatingInfo({
                ...snapshot.val()
            })
        })
    }, [])

    return (
        < Page title={heatingInfo.title} image={heatingInfo.img} description={heatingInfo.text} />
    )
}

export default Heating;




// export default class Heating extends Component {
//     componentDidMount() {
//         document.body.style.backgroundColor = "green"
//     }
//     componentWillUnmount() {
//         document.body.style.backgroundColor = "black"
//     }
//     render() {
//         return (<h1>Test</h1>)
//     }
// }