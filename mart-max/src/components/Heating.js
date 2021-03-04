import React, { useState, useEffect, Component } from 'react'
import Page from './shared/Page'

import { fetchData } from "./../firebase";

const Heating = () => {
    var [heatingInfo, setHeating] = useState({})

    useEffect(() => {
        fetchData('menus', setHeating, 'heating');
    }, [])

    return (
        < Page title={heatingInfo.title} image={heatingInfo.img} description={heatingInfo.text} />
    )
}

export default Heating;