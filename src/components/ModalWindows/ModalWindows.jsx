import React, { useState } from 'react'
// import css
import './ModalWindows.css'

const ModalWindows = ( { cows, isLoading, getCows } ) => {

  const [cowDatos, setCowDatos] = useState({
    "idSenasa": "",
    "animalType": "",
    "weight": "",
    "potreroName": "",
    "deviceType": "",
    "deviceNumber": ""
  })

  //post method
  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(cow);
    fetch(`http://localhost:8080/cows`,{
      method:'POST',
      body: JSON.stringify(cowDatos),
      headers: {
        'Content-type':'application/json; charset=UTF-8',
      }
    })
    .then((response) =>response.json())
    .then( (response) => {
      console.log(response)
    })
    .catch(error => console.log(error))

    e.target.reset()
    getCows()
  }
  
  const handleChange = ({ target }) => {
    setCowDatos({
      ...cowDatos,
      [target.name]: target.value
    })
  }


  return (
    <>
      {/* Button of Modal Windows */}
      <button type="button" className="btn  btnCreateNewRegister text-white" data-bs-toggle="modal" data-bs-target="#createNewRegister">
        Crear un nuevo registro
      </button>

      <div className="modal fade" id="createNewRegister" tabindex="-1" aria-labelledby="createNewRegisterLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="createNewRegisterLabel">Crear nuevo registro</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="idSenasa" className="form-label">ID Senasa</label>
                  <input type="text" name='idSenasa' onChange={handleChange} className="form-control inputDecoration" id="idSenasa" aria-describedby="textHelp" />
                </div>
                <div className="mb-3 ">
                  <label htmlFor="animalType" className="form-label inputDecoration">Tipo de Animal</label>
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
                  {/* <div id="textHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3 ">
                  <label htmlFor="deviceType" className="form-label ">Tipo de dispositivo</label>
                  <select name='deviceType' onChange={handleChange}  className="form-select mt-2 inputDecoration" id="deviceType">
                    <option selected
                    >Seleccionar dispositivo</option>
                    <option value="Collar">Collar</option>
                    <option value="Caravana">Caravana</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="deviceNumber" className="form-label ">Numero Dispositivo</label>
                  <input type="text" name='deviceNumber' onChange={handleChange} className="form-control inputDecoration" id="deviceNumber" aria-describedby="textHelp" />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary inputDecoration" data-bs-dismiss="modal">Cancelar</button>
                  <button type="submit" className="btn btnCreateNewRegister text-white inputDecoration">Guardar Cambios</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ModalWindows