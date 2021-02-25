import React, { useState, useEffect } from 'react'
import Page from './shared/Page'

import fireDb from './../firebase';

// Find a way to resize images with css

const Ventilation = () => {

    var [ventilationInfo, setVentilationInfo] = useState({})

    useEffect(() => {
        fireDb.child('menus').child('ventilation').on('value', snapshot => {
            setVentilationInfo({
                ...snapshot.val()
            })
        })
    }, [])

    return (
        < Page title="Вентилация" image={ventilationInfo.img} description={ventilationInfo.text} />
    )
}

export default Ventilation;