import React, { useState,useRef } from 'react'
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
  const closeButonRef = useRef(null)
  // form validation states
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleChange = ({ target }) => {
    setCowDatos({
      ...cowDatos,
      [target.name]: target.value
    })
  }


  const handleBlur=({ target })=>{
    setCowDatos({
      ...cowDatos,
      [target.name]: target.value
    })
    setErrors(validateForm(cowDatos))
    console.log("blur");
  }
  // form validation functions, when the form lose the focus
  const validateForm=(cowDatos)=>{
    let errors = {}
    const alphanumeric = /^[a-zA-Z0-9]+$/

    // const caractersAtIdSenasa = /^.{1,200}$/;
    // when the input is clean
    if(!cowDatos.idSenasa.trim()){
      errors.idSenasa = `el campo  es obligatorio`
    }else if(!alphanumeric.test(cowDatos.idSenasa.trim())){
      errors.idSenasa = `Ingrese un Id alfanumerico hasta 16 caracteres`
    }else if(cowDatos.idSenasa.trim().length > 16){
      errors.idSenasa = `Ingrese solo hasta  16 caracteres`
    }

    if(!cowDatos.animalType.trim()){
      errors.animalType = `Elija una de las opciones disponible`
    }

    if(!cowDatos.weight.trim()){
      errors.weight = `el campo  es obligatorio`
    }

    if(!cowDatos.potreroName.trim()){
      errors.potreroName = `el campo  es obligatorio`
    }

    if(!cowDatos.deviceType.trim()){
      errors.deviceType = `Elija una de las opciones disponible`
    }

    if(!cowDatos.deviceNumber.trim()){
      errors.deviceNumber = `el campo  es obligatorio`
    }else if(!alphanumeric.test(cowDatos.deviceNumber.trim())){
      errors.deviceNumber = `Ingrese un Id alfanumerico hasta 8 caracteres`
    }else if(cowDatos.deviceNumber.trim().length > 8){
      errors.deviceNumber = `Ingrese solo hasta  8 caracteres`
    }

    return errors
  }
  
  //post method
  const handleSubmit = async (e) => {
    e.preventDefault()
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
      closeButonRef.current.click()
    })
    .catch(error => console.log(error))
    
    e.target.reset()
    getCows()
  }
  return (
    <>
      {/* Button of Modal Windows0 */}
      <button type="button" className="btn btnCreateNewRegister text-white" data-bs-toggle="modal" data-bs-target="#createNewRegister" >
        Crear un nuevo registro
      </button>

      <div className="modal fade" id="createNewRegister" tabIndex="-1" aria-labelledby="createNewRegisterLabel" aria-hidden="true">
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
                  <input type="text" name='idSenasa'required  onChange={handleChange} onBlur={handleBlur} className="form-control inputDecoration " id="idSenasa" aria-describedby="textHelp" />
                  {errors.idSenasa && <p className='incorrectData'>{errors.idSenasa}</p>}
                  {/* <div id="idSenasaFail" className="form-text">Los datos ingresados son incorrectos</div> */}
                </div>
                <div className="mb-3 ">
                  <label htmlFor="animalType" className="form-label inputDecoration">Tipo de Animal</label>
                  <select name='animalType' required onChange={handleChange} onBlur={handleBlur} className="form-select mt-2 inputDecoration" id="animalType">
                    <option selected >Seleccionar Tipo</option>
                    <option value="Novillo">Novillo</option>
                    <option value="Toro">Toro</option>
                    <option value="Vaquillona">Vaquillona</option>
                  </select>
                  {errors.animalType && <p className='incorrectData'>{errors.animalType}</p>}
                </div>

                <div className="mb-3">
                  <label htmlFor="weight" className="form-label ">Peso (Kg)</label>
                  <input type="number" name='weight' required onChange={handleChange} onBlur={handleBlur} className="form-control inputDecoration" id="weight" aria-describedby="textHelp" />
                  {errors.weight && <p className='incorrectData'>{errors.weight}</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="potreroName" className="form-label ">Nombre potrero</label>
                  <input type="text" name='potreroName' required onChange={handleChange} onBlur={handleBlur} className="form-control inputDecoration" id="potreroName" aria-describedby="textHelp" />
                  {errors.potreroName && <p className='incorrectData'>{errors.potreroName}</p>}
                </div>
                <div className="mb-3 ">
                  <label htmlFor="deviceType" className="form-label ">Tipo de dispositivo</label>
                  <select name='deviceType' onChange={handleChange} required onBlur={handleBlur} className="form-select mt-2 inputDecoration" id="deviceType">
                    <option selected
                    >Seleccionar dispositivo</option>
                    <option value="Collar">Collar</option>
                    <option value="Caravana">Caravana</option>
                  </select>
                  {errors.deviceType && <p className='incorrectData'>{errors.deviceType}</p>}
                </div>
                <div className="mb-3">
                  <label htmlFor="deviceNumber" className="form-label ">Numero Dispositivo</label>
                  <input type="text" name='deviceNumber' onChange={handleChange} onBlur={handleBlur} className="form-control inputDecoration" id="deviceNumber" aria-describedby="textHelp" />
                  {errors.deviceNumber && <p className='incorrectData'>{errors.deviceNumber}</p>}
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary inputDecoration" data-bs-dismiss="modal" ref={closeButonRef}>Cancelar</button>
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