import React, { useState, useEffect } from 'react'
import fireDb from './../firebase';

// TODO Images urls,personal info and description comes from Firebase !

const About = () => {
    var [aboutInfo, setAboutInfo] = useState({})
    var [architectsInfo, setArchitectsInfo] = useState({})

    useEffect(() => {
        fireDb.child('about').on('value', snapshot => {
            console.log(snapshot)
            if (snapshot.val() != null)
                setAboutInfo({
                    ...snapshot.val()
                })
            else
                setAboutInfo({})
        });

        fireDb.child('architects').on('value', snapshot => {
            console.log(snapshot)
            if (snapshot.val() != null)
                setArchitectsInfo({
                    ...snapshot.val()
                })
            else
                setArchitectsInfo({})
        });
    }, [])

    return (
        <div className="site-section">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">За нас</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-md-7">
                        <img src={aboutInfo.img} alt="Images" className="img-fluid"></img>
                    </div>
                    <div className="col-md-4 ml-auto mt-3 d-flex align-items-center">
                        <div>
                            <h3 className="text-white text-center">Нашата мисия</h3>
                            <p className="text-center">{aboutInfo.text}</p>
                        </div>
                    </div>
                </div>

                <div className="row pt-5">
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
        </div>
    )
}

export default About