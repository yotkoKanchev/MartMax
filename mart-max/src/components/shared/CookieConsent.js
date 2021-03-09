import React, { useState } from 'react'

const CookieConsent = () => {
    var [cookieConsent, setCookieConsent] = useState(false)

    const cookieConsentAgreed = () => {
        localStorage.setItem("cookieConsent", true);
        setCookieConsent({
            cookieConsent: true,
        })
    }

    cookieConsent = localStorage.getItem("cookieConsent") ? true : false;

    return (
        <div className="sticky text-center bg-white" style={{ opacity: cookieConsent ? 0 : 1 }}>
            <p className="mb-0">Този сайт използва бисквитки(cookies), за да улесним вашето сърфиране и спестим трафик.
                <input type="button" className="btn btn-primary col-md-2" onClick={() => cookieConsentAgreed()} value="Съгласявам се" />
            </p>
        </div >
    )
}

export default CookieConsent