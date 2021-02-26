import React, { useState, useEffect } from 'react'
import Page from './shared/Page'

import { fireDb } from './../firebase';

const Design = () => {

    var [designInfo, setDesignInfo] = useState({})

    useEffect(() => {
        fireDb.child('menus').child('design').on('value', snapshot => {
            setDesignInfo({
                ...snapshot.val()
            })
        })
    }, [])

    return (
        < Page title="Проектиране" image={designInfo.img} description={designInfo.text} />
    )
}

export default Design;