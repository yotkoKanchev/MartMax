import React, { useState, useEffect } from 'react'
import Page from './shared/Page'

import { fetchData } from "./../firebase";

const AirConditioning = () => {

    var [ac, setAc] = useState({})

    useEffect(() => {
        fetchData('menus', setAc, 'ac');
    }, [])

    return (
        < Page title="Килиматизация" image={ac.img} description={ac.text} />
    )
}

export default AirConditioning;