import React, { useState, useEffect } from 'react'
import { fetchData } from "./../../firebase";

const Page = (props) => {

    var [values, setValues] = useState({})

    useEffect(() => {
        fetchData(props.collection, setValues, props.child);
    }, [])

    return (
        <div className="site-section">
            <div className="container-fluid">
                <div className="row items-center">
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">{values.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5 items-center">
                    <div className="col-md-6 square-container">
                        <img src={values.img} alt={values.title} className="img-fluid"></img>
                    </div>
                    <div className="d-flex align-items-center col-md-4 ml-auto mt-2">
                        <p>{values.text}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Page