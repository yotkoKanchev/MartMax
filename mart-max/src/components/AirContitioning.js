import React, { useState, useEffect } from 'react'
import Page from './shared/Page'
import fireDb from './../firebase';

const AirConditioning = () => {

    var [acInfo, setAcInfo] = useState({})

    useEffect(() => {
        fireDb.child('ac').on('value', snapshot => {
            console.log(snapshot)
            if (snapshot.val() != null)
                setAcInfo({
                    ...snapshot.val()
                })
            else
                setAcInfo({})
        })
    }, [])

    return (
        < Page title="Килиматизация" image={acInfo.img} description={acInfo.text} />
    )
}

export default AirConditioning;