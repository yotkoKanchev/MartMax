import React from 'react'

const Contact = () =>
(
    <div>
        <div className="site-section" data-aos="fade">
            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">Контакти</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-10 ml-auto">
                        <div className="mb-3">
                            <p className="mb-0 font-weight-bold text-white">Адрес</p>
                            <p className="mb-2">София, 1784</p>
                            <p className="mb-4">кв.Иван Вазов, бл.12 офис 3</p>

                            <p className="mb-0 font-weight-bold text-white">Телефон</p>
                            <p className="mb-4"><a href="+359 899874204">+359 899874204</a></p>

                            <p className="mb-0 font-weight-bold text-white">Имейл</p>
                            <p className="mb-0"><a href="mailto: rosen_p@yahoo.com">rosen_p@yahoo.com</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
)

export default Contact