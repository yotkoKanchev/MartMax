import React, { useState, useEffect } from 'react'
import Page from './shared/Page'

import fireDb from './../firebase';

// Find a way to resize images with css

const Ventilation = () => {

    var [ventilationInfo, setVentilationInfo] = useState({})

    useEffect(() => {
        fireDb.child('heating').on('value', snapshot => {
            console.log(snapshot)
            if (snapshot.val() != null)
                setVentilationInfo({
                    ...snapshot.val()
                })
            else
                setVentilationInfo({})
        })
    }, [])

    return (
        < Page title="Вентилация" image={ventilationInfo.img} description={ventilationInfo.text} />
    )
}

export default Ventilation;