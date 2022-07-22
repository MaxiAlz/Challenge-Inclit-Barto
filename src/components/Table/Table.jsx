import React, { useState, useRef,useEffect} from 'react'
//import css
import './Table.css'
const Table = ({ cows, isLoading, getCows, setCows }) => {

  const [_idRegisterToEdit, set_idRegisterToEdit] = useState("")
  const closeButonRef = useRef(null)

  useEffect(() => {
    
  }, [])
  

  const registerToEdit = (_id) => {
    set_idRegisterToEdit(_id)
    console.log(_id);
  }

  const editRegister = (e) => {
    e.preventDefault()

    try {
      fetch(`http://localhost:8080/cows/${_idRegisterToEdit}`, {
        method: 'PATCH',
        body: JSON.stringify(cowDataToEdit),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
        .then(response => response.json())
        .then((response) => {
          const newState = cows.map(cow => {
            // 👇️ if id equals 2, update country property
            if (cow._id === _idRegisterToEdit) {
              return { ...cowDataToEdit };
            }
            // 👇️ otherwise return object as is
            return cow;
          })
          setCows(newState)
          closeButonRef.current.click()
          console.log(response)
          console.log("editado", _idRegisterToEdit)
        })
    } catch (error) {
      console.log(error)
    }
    
  }

  const [cowDataToEdit, setcowDataToEdit] = useState({
    "idSenasa": "",
    "animalType": "",
    "weight": "",
    "potreroName": "",
    "deviceType": "",
    "deviceNumber": ""
  })

  const handleChange = ({ target }) => {
    setcowDataToEdit({
      ...cowDataToEdit,
      [target.name]: target.value
    })
  }

  const deleteRegister = async (_id) => {
    await fetch(`http://localhost:8080/cows/${_id}`,{
      method:'DELETE'
    })
    console.log(_id);
    getCows()
    // console.log(_id)
  }

  return (
    <>
      <table className='table table-striped container '>
        <thead>
          <tr>
            <th scope="col">ID SENASA</th>
            <th scope="col">Tipo animal</th>
            <th scope="col">Peso</th>
            <th scope="col">Nombre Protrero</th>
            <th scope="col">Tipo Dispositivo</th>
            <th scope="col">Numero Dispositivo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            !isLoading ?
              cows.map(cow => {
                const { animalType, deviceNumber, deviceType, idSenasa, potreroName, weight } = cow
                return <tr key={cow._id}>
                  <th scope="row">{idSenasa}</th>
                  <td >{animalType}</td>
                  <td >{`${weight} Kg`}</td>
                  <td >{potreroName}</td>
                  <td >{deviceType}</td>
                  <td >{deviceNumber}</td>
                  <td>
                    {/* <button className='btn btn-outline-secondary'>Editar</button> */}
                    <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editNewRegister" onClick={() => registerToEdit(cow._id)}>
                      Editar
                    </button>
                    <button className='btn btn-outline-secondary ms-2' onClick={() => deleteRegister(cow._id)}>Borrar</button>
                  </td>
                </tr>
              })
              :
              <div className='container d-flex justify-content-center ps-5 pt-3'>
                <p lassName=''>Cargando Datos...</p>
              </div>
          }
        </tbody>
      </table>


      {/* modal screen */}
      <div className="modal fade" id="editNewRegister" tabindex="-1" aria-labelledby="editNewRegisterLabel" aria-hidden="true" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editNewRegisterLabel">Editar Registro</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={() => editRegister(_idRegisterToEdit)}>
                <div className="mb-3">
                  <label htmlFor="idSenasa" className="form-label">ID Senasa</label>
                  <input type="text" name='idSenasa' onChange={handleChange} className="form-control inputDecoration" id="idSenasa" aria-describedby="textHelp" />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="animalType" classNames="form-label inputDecoration">Tipo de Animal</label>
                  <select name='animalType' onChange={handleChange} className="form-select mt-2 inputDecoration" id="animalType">
                    <option selected >Seleccionar Tipo</option>
                    <option value="Novillo">Novillo</option>
                    <option value="Toro">Toro</option>
                    <option value="Vaquillona">Vaquillona</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="weight" className="form-label ">Peso (Kg)</label>
                  <input type="number" name='weight' onChange={handleChange} className="form-control inputDecoration" id="weight" aria-describedby="textHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="potreroName" className="form-label ">Nombre potrero</label>
                  <input type="text" name='potreroName' onChange={handleChange} className="form-control inputDecoration" id="potreroName" aria-describedby="textHelp" />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="deviceType" classNames="form-label ">Tipo de dispositivo</label>
                  <select name='deviceType' onChange={handleChange} className="form-select mt-2 inputDecoration" id="deviceType">
                    <option selected>Seleccionar dispositivo</option>
                    <option value="Collar">Collar</option>
                    <option value="Caravana">Caravana</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="deviceNumber" className="form-label ">Numero Dispositivo</label>
                  <input type="text" name='deviceNumber' onChange={handleChange} className="form-control inputDecoration" id="deviceNumber" aria-describedby="textHelp" />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary inputDecoration" data-bs-dismiss="modal" ref={closeButonRef}>Cancelar</button>
                  <button type="submit" className="btn btnEditRegister inputDecoration text-white" onClick={(e) => editRegister(e)}>Editar y Guardar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table