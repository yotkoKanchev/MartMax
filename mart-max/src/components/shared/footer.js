import React from 'react'
import CookieConsent from './CookieConsent'
const Footer = () => {
    const year = new Date().getFullYear();
    const date = year > 2021 ? `2021 - ${year}` : 2021
    return (
        <footer className="footer py-4">
            <CookieConsent />
            <div className="container-fluid text-center">
                <p>Всички права запазени {date} &copy; МАРТМАКС ЕООД
                    <span className="pl-2">|</span> This template is made with
            <i className="far fa-heart ml-1"></i> by <a href="https://colorlib.com"
                        target="_blank">Colorlib</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer