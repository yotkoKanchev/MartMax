import React, { useState, useEffect } from 'react'
import fireDb from './../firebase';
import Page from './shared/Page'

// TODO Images urls,personal info and description comes from Firebase !

const About = () => {
    var [aboutInfo, setAboutInfo] = useState({})
    var [architectsInfo, setArchitectsInfo] = useState({})

    useEffect(() => {
        fireDb.child('about').on('value', snapshot => {
            setAboutInfo({
                ...snapshot.val()
            })
        });

        fireDb.child('architects').on('value', snapshot => {
            setArchitectsInfo({
                ...snapshot.val()
            })
        });
    }, [])

    return (
        <div>
            < Page title={aboutInfo.title} image={aboutInfo.img} description={aboutInfo.text} />
            <div className="row pt-3 pb-5">
                {
                    Object.keys(architectsInfo).map((key) => {
                        let architect = architectsInfo[key];
                        return (
                            <div key={key} className="col-md-6 col-lg-6 col-xl-6 text-center pt-5">
                                <img src={architect.img} alt="Image" className="img-fluid w-50 rounded-circle mb-4"></img>
                                <h2 className="font-weight-light mb-4">{architect.name}</h2>
                                <h5>{architect.title}</h5>
                                <h5 className="font-weight-light mb-4">тел.
                                        <a href={architect.phone}>{architect.phone}</a>
                                </h5>
                                <ul className="text-center">
                                    {
                                        Object.keys(architect.services).map((id) => {
                                            let service = architect.services[id]
                                            return (
                                                <li key={id}>{service}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default About