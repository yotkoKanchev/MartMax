import React, { Component } from 'react'

export default class Page extends Component {
    render() {
        return (
            <div className="site-section">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-7">
                            <div className="row mb-5">
                                <div className="col-12 ">
                                    <h2 className="site-section-heading text-center">{this.props.title}</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-7">
                            <img src={this.props.image} alt={this.props.title} className="img-fluid"></img>
                        </div>
                        <div className="col-md-4 ml-auto mt-2">
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}