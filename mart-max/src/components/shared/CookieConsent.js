import React, { useState, useEffect } from 'react'

const CookieConsent = () => {
    var [cookieConsent, setcookieConsent] = useState(false)

    const cookieConsentAgreed = () => {
        localStorage.setItem("cookieConsent", true);
        setcookieConsent({
            cookieConsent: true,
        })
    }

    cookieConsent = localStorage.getItem("cookieConsent") ? true : false;

    if (cookieConsent) {
        return (
            <span></span>
        )
    } else {
        return (
            <div className="sticky text-center bg-white">
                <p className="mb-0">Този сайт използва бисквитки(cookies), за да улесним вашето сърфиране и спестим трафик.
                <input type="button" className="btn btn-primary col-md-2" onClick={() => cookieConsentAgreed()} value="Съгласявам се" />
                </p>
            </div>
        )
    }
}

export default CookieConsent