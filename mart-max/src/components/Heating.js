import React, { useState, useEffect } from 'react'
import Page from './shared/Page'

import fireDb from './../firebase';

// Find a way to resize images with css

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
