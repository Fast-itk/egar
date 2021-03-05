
import React from 'react'

const Table = ({ data, deleteTool, edit, editItem, testDate }) => {

    const list = data.map((item, index) => {
        return (
            <tr key={index}>
                <th className="align-middle">
                    { 
                        item.edit
                        ? <input 
                            className="form-control" 
                            type="text" 
                            value={ item.date } 
                            onChange={(e) => editItem(e.target.value, item, 'date')}
                          />
                        : 
                        <div className="d-inline-block w-100">
                            {item.date} 
                        </div>
                    }
                </th>
                <td className="align-middle">
                    { 
                        item.edit
                        ? <input 
                            className="form-control" 
                            type="text" 
                            value={ item.tool } 
                            onChange={(e) => editItem(e.target.value, item, 'tool')}  
                          />
                        : item.tool 
                    }
                </td>
                <td className="align-middle">
                    { 
                        item.edit
                        ? <input 
                            className="form-control" 
                            type="number" 
                            value={ item.cost } 
                            onChange={(e) => editItem(e.target.value, item, 'cost')}  
                          />
                        : item.cost 
                    }
                </td>
                <td>
                    <div className="d-flex justify-content-end">
                        {
                            item.edit
                            ? <button 
                              className="btn btn-success"
                              disabled={(item.date === '' && !testDate(item.date)) 
                                && item.tool === '' 
                                && (item.cost === '')}
                              onClick={() => edit(item, false)} 
                              ><i className="fas fa-check"></i></button>
                            
                            : <button 
                              className="btn btn-primary"
                              onClick={() => edit(item, true)} 
                              ><i className="fas fa-pencil-alt"></i></button>
                        }
                        
                        <button 
                            className="btn btn-danger ml-2"
                            onClick={() => deleteTool(item)}
                        ><i className="fas fa-trash-alt"></i></button>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <table className="table ">
            <thead>
                <tr>
                    <th scope="col text-center">Дата</th>
                    <th scope="col">Инструмент</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col text-end"></th>
                </tr>
            </thead>
            <tbody>
                { list }
            </tbody>
        </table>
    )
}

export default Table