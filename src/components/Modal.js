import React from 'react'
import Alert from './Alert'

const Modal = ({ toggleModal, values, changeHandler, add, alert }) => {
    return (
            <div className="modal-dialog modal-xl w-100 position-fixed">
                <form className="modal-content" onSubmit={add} method="POST" action="/">
                    <div className="modal-header">
                        <h5 className="modal-title">Добавить в таблицу</h5>
                        <button className="btn btn-secondary" onClick={() => toggleModal(false)}><i className="fas fa-times"></i></button>
                    </div>
                    <div className="modal-body w-100">
                        {
                            alert.show 
                            ? <Alert 
                                message={alert.message}
                                type={alert.type}
                            />
                            :null
                        }

                        <div className="row">
                            <div className="col-sm-4">
                                <label htmlFor="date">Дата</label>
                                <div className="input-group mb-3">
                                    <input 
                                        id="date" 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="дд.мм.гггг" 
                                        value={values.date}
                                        onChange={(e) => changeHandler(e.target.value, 'date')}   
                                        />
                                </div>
                            </div>
                            <div className="col-sm-4">
                            <label htmlFor="tool">Инструмент</label>
                                <div className="input-group mb-3">
                                    <input 
                                        id="tool" 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Введите инструмент" 
                                        value={values.tool}
                                        onChange={(e) => changeHandler(e.target.value, 'tool')}    
                                    />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <label htmlFor="cost">Стоимость</label>
                                <div id="cost" className="input-group mb-3">
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Введите стоимость" 
                                        value={values.cost}
                                        onChange={(e) => changeHandler(e.target.value, 'cost')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="submit" 
                            className="btn btn-success" 
                            
                        >Добавить</button>
                    </div>
                </form>
            </div>
     
    )
}

export default Modal