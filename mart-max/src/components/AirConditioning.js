import React, { useState, useEffect } from 'react'
import Page from './shared/Page'

import { fireDb } from './../firebase';

const AirConditioning = () => {

    var [acInfo, setAcInfo] = useState({})

    useEffect(() => {
        fireDb.child('menus').child('ac').on('value', snapshot => {
            setAcInfo({
                ...snapshot.val()
            })
        })
    }, [])

    return (
        < Page title="Килиматизация" image={acInfo.img} description={acInfo.text} />
    )
}

export default AirConditioning;