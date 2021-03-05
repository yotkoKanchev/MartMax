import React from 'react'

const Employee = () => {

    const initialFieldValues = {
        name: '',
        title: '',
        img: '',
        phone: '',
    }

    var [values, setValues] = useState(initialFieldValues);

    useEffect(() => {
        if (props.currentId == '')
            setValues({
                ...initialFieldValues
            })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values)
    }

    return (
        <div className="site-section">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="row mb-5">
                            <div className="col-12 ">
                                <h2 className="site-section-heading text-center">Редактиране на Rosen Petrov</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <form autoComplete="off" className="col-md-6" onSubmit={handleFormSubmit}>
                        <div className="form-group input-group">
                            <div className="input-group-text">
                                <span>Заглавие</span>
                            </div>
                            <input className="form-control" name="title"
                                value={values.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-text">
                                <span>Текст</span>
                            </div>
                            <textarea className="form-control" name="text" rows="10"
                                value={values.text}
                                onChange={handleInputChange}
                            />
                        </div>
                        <p>Максимум символа: {maxSymbols} оставащи: <span className={maxSymbols - values.text.length < 0 ? 'text-danger' : ''}>{maxSymbols - values.text.length}</span></p>
                        <div className="form-group input-group">
                            <div className="input-group-text">
                                <span>Снимка</span>
                            </div>
                            <input className="form-control" name="img"
                                value={values.img}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit" value='Промени' className="btn btn-primary btn-block" />
                        </div>
                    </form>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center">
                            <img src={values.img} alt={values.title} className="img-fluid img-sized"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employee;
