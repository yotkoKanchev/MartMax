import React, { useState, useEffect } from 'react'
import Page from './shared/Page'

import { readFromDb } from "./../fetcher";

const AirConditioning = () => {

    var [ac, setAc] = useState({})

    useEffect(() => {
        readFromDb('menus', setAc, 'ac');
    }, [])

    return (
        < Page title="Килиматизация" image={ac.img} description={ac.text} />
    )
}

export default AirConditioning;