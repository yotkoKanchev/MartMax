import React, { useState, useEffect } from 'react'
import Page from './shared/Page'

import fireDb from './../firebase';

// Find a way to resize images with css

const Heating = () => {

    var [heatingInfo, setHeatingInfo] = useState({})

    useEffect(() => {
        fireDb.child('heating').on('value', snapshot => {
            console.log(snapshot)
            if (snapshot.val() != null)
                setHeatingInfo({
                    ...snapshot.val()
                })
            else
                setHeatingInfo({})
        })
    }, [])

    return (
        < Page title="Отопление" image={heatingInfo.img} description={heatingInfo.text} />
    )
}

export default Heating;
