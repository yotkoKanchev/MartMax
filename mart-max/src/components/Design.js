import React, { useState, useEffect } from 'react'
import Page from './shared/Page'

import { fetchData } from "./../firebase";

const Design = () => {

    var [designInfo, setDesign] = useState({})

    useEffect(() => {
        fetchData('menus', setDesign, 'design');
    }, [])

    return (
        < Page title="Проектиране" image={designInfo.img} description={designInfo.text} />
    )
}

export default Design;