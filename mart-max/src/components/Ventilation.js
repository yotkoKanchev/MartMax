import React, { useState, useEffect } from 'react'

import Page from './shared/Page'
import { fetchData } from "./../firebase";

const Ventilation = () => {
    var [ventilation, setVentilation] = useState({})

    useEffect(() => {
        fetchData('menus', setVentilation, 'ventilation');
    }, [])

    return (
        < Page title="Вентилация" image={ventilation.img} description={ventilation.text} />
    )
}

export default Ventilation;