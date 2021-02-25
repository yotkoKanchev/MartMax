import React, { useState, useEffect } from 'react'

import fireDb from './../firebase';

const Contact = () => {
    var [contactsInfo, setContactsInfo] = useState({})

    useEffect(() => {
        fireDb.child('contacts').on('value', snapshot => {
            console.log(snapshot)
            if (snapshot.val() != null)
                setContactsInfo({
                    ...snapshot.val()
                })
            else
                setContactsInfo({})
        })
    }, [])

    return (
        <div className="site-section">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">Контакти</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-10 ml-auto">
                        <div className="mb-5 mt-5">
                            <p className="mb-0 font-weight-bold text-white">Адрес</p>
                            <p className="mb-2 large-font">{contactsInfo.city}</p>
                            <p className="mb-2 large-font">{contactsInfo.address}</p>
                            <p className="mb-0 font-weight-bold text-white">Телефон</p>
                            <p className="mb-4"><a href="+359 899874204">+359 899874204</a></p>
                            <p className="mb-0 font-weight-bold text-white">Имейл</p>
                            <p className="mb-0"><a href="mailto: {contactsInfo.email}">{contactsInfo.email}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact