import React, {useState} from 'react'
import Chart from './components/Chart'
import Modal from './components/Modal'
import Overlay from './components/Overlay'
import Table from './components/Table'
import { initialData } from './data'

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState(initialData)
  const [alert, setAlert] = useState({
    mesage: '',
    type: '',
    show: false 
  })
  const [dataFromInput, setDataFromInput] = useState({
    date: '',
    tool: '',
    cost: ''
  })

  const toggleModal = isOpen => setOpenModal(isOpen)

  const hideAlert = () => {
    setAlert({
      message: '',
      type: '',
      show: false
    })
  }

  const changeHandler = (value, prop) => {
    let newData = {...dataFromInput}
    newData[prop] = value
    setDataFromInput(newData)
  }

  const testDate = (date) => {
    const regExp = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/
    return regExp.test(date)
  }

  const addTool = event => {
    event.preventDefault()
    const {date, tool, cost} = dataFromInput
    
    if ((date !== '' && testDate(date)) && tool !== '' && (cost !== '' && +cost > 0)) {
      const copyData = [...data]
      setAlert({
        message: 'Данные успешно добавлены!',
        type: 'success',
        show: true
      })
      const addData = {date, tool, cost, edit: false}

      copyData.push(addData)
      setData(copyData)
      setDataFromInput({date: '', tool: '', cost: ''})

      setTimeout(hideAlert, 2000)
    } else {
      setAlert({
        message: 'Ошибка!',
        type: 'error',
        show: true
      })
      setTimeout(hideAlert, 2000)
    }
    
  }

  const deleteTool = currentData => setData(data.filter(item => currentData !== item))

  const onEditMode = (item, editMode) => {
    const copyData = [...data]

    const editItem = copyData.find(i => i === item)
    const {date, tool, cost} = editItem
    editItem.edit = editMode
    if ((date !== '' && testDate(date))  && tool !== '' && (cost !== '' && +cost > 0)) {
      setData(copyData)
    } else {
      editItem.edit = true
    }
  }

  const editItem = (value, item, prop) => {
    const copyData = [...data]
    const editItem = copyData.find(i => i === item)
    editItem[prop] = value
    setData(copyData)
  }

  return (
    <div className="container">
      <h1 className='text-center text-secondary pt-4'>EGAR TECHNOLOGY</h1>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary m-2" onClick={() => toggleModal(true)}><i className="fas fa-plus"></i></button>
      </div>
      
      {
        openModal 
        ? <>
            <Overlay toggleModal={toggleModal} />
            <Modal 
              toggleModal={toggleModal}
              changeHandler={changeHandler}  
              values={dataFromInput}
              add={addTool}
              alert={alert}
            /> 
          </>
        :null
      }
      
      <Table 
        data={data}
        deleteTool={deleteTool}  
        edit={onEditMode}
        editItem={editItem}
        testDate={testDate}
      />

      <Chart 
        data={data}
        open={openModal}
      />
    </div>
  );
}

export default App;
