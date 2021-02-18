import React from 'react'

const Footer = () => {
    return (

        <div className="footer py-4">
            <div className="container-fluid text-center">
                <p>All rights Reserved 2021-<span>
                    <script>document.write(new Date().getFullYear())</script>
                </span> &copy; MAXMART
            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    <span className="pl-2">|</span> This template is made with
            <i className="icon-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com"
                        target="_blank">Colorlib</a>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                </p>
            </div>
        </div>
    )
}

export default Footer