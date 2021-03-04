import React, { useState, useEffect } from 'react'
import { fetchData, editData } from "./../../firebase";

const Edit_Ac = (props) => {

    const initialFieldValues = {
        title: '',
        text: '',
        img: '',
    }

    var [ac, setAc] = useState(initialFieldValues)

    useEffect(() => {
        fetchData('menus', setAc, 'ac');
    }, [])

    const handleInputChange = e => {

        var { name, value } = e.target;
        console.log(name)
        console.log(value)
        setAc({
            ...ac,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        editData('menus', `ac`, ac);
    }

    return (
        <div className="site-section">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">Редактиране на {ac.title}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <form autoComplete="off" onSubmit={handleFormSubmit}>
                    <div className="form-group input-group">
                        <div className="input-group-text">
                            <span>Заглавие</span>
                        </div>
                        <input className="form-control" name="title"
                            value={ac.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-text">
                            <span>Текст</span>
                        </div>
                        <textarea className="form-control" name="text" rows="7"
                            value={ac.text}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-text">
                            <span>Снимка</span>
                        </div>
                        <input className="form-control" name="img"
                            value={ac.img}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value={props.currentId == '' ? "Save" : "Update"} className="btn btn-primary btn-block" />
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Edit_Ac;