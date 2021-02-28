import React, { useState, useEffect } from 'react'

import Page from './shared/Page'
import { readFromDb } from "./../fetcher";

const Ventilation = () => {
    var [ventilation, setVentilation] = useState({})

    useEffect(() => {
        readFromDb('menus', setVentilation, 'ventilation');
    }, [])

    return (
        < Page title="Вентилация" image={ventilation.img} description={ventilation.text} />
    )
}

export default Ventilation;