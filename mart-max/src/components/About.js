import React from 'react'
import coffeeImage from './../images/img_2.jpg'
import kim from './../images/kim.jpg'

// TODO Images urls,personal info and description comes from Firebase !

const About = () =>
(
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
                    <img src={coffeeImage} alt="Images" className="img-fluid"></img>
                </div>
                <div className="col-md-4 ml-auto mt-3">
                    <h3 className="text-white">Нашата мисия</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus vel tenetur explicabo necessitatibus, ad soluta consectetur illo qui voluptatem. Quis soluta maiores eum. Iste modi voluptatum in repudiandae fugiat suscipit dolorum harum, porro voluptate quis? Alias repudiandae dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam facere voluptatem similique.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor architecto excepturi aliquid minus nostrum dicta labore iusto obcaecati fugit cupiditate.</p>
                </div>
            </div>

            <div className="row pt-5">
                <div className="col-md-6 col-lg-6 col-xl-6 text-center pt-5">
                    <img src={kim} alt="Image" className="img-fluid w-50 rounded-circle mb-4"></img>
                    <h2 className="font-weight-light mb-4">Росен Петров</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?</p>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 text-center pt-5">
                    <img src={kim} alt="Image" className="img-fluid w-50 rounded-circle mb-4"></img>
                    <h2 className="font-weight-light mb-4">Наросен Братму</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ab quas facilis obcaecati non ea, est odit repellat distinctio incidunt, quia aliquam eveniet quod deleniti impedit sapiente atque tenetur porro?</p>
                </div>
            </div>
        </div>
    </div>
)

export default About