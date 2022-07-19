import React from 'react'
// import css
import './ModalWindows.css'

const ModalWindows = () => {
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
              <form>
                <div className="mb-3">
                  <label htmlFor="idSenasa" className="form-label">ID Senasa</label>
                  <input type="text" className="form-control inputDecoration" id="idSenasa" aria-describedby="textHelp" />

                </div>
                <div class="mb-3 ">
                  <label htmlFor="animalType" clasNames="form-label inputDecoration">Tipo de Animal</label>
                  <select className="form-select mt-2 inputDecoration" id="animalType">
                    <option selected>Seleccionar Tipo</option>
                    <option value="1">Novillo</option>
                    <option value="2">Toro</option>
                    <option value="3">Vaquillona</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="weight" className="form-label ">Peso (Kg)</label>
                  <input type="number" className="form-control inputDecoration" id="weight" aria-describedby="textHelp" />
                </div>
                <div className="mb-3">
                  <label htmlFor="potreroName" className="form-label ">Nombre potrero</label>
                  <input type="text" className="form-control inputDecoration" id="potreroName" aria-describedby="textHelp" />
                  {/* <div id="textHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3 ">
                  <label htmlFor="deviceType" clasNames="form-label ">Tipo de dispositivo</label>

                  <select className="form-select mt-2 inputDecoration" id="deviceType">
                    <option selected>Seleccionar dispositivo</option>
                    <option value="1">Collar</option>
                    <option value="2">Caravana</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="deviceNumber" className="form-label ">Numero Dispositivo</label>
                  <input type="text" className="form-control inputDecoration" id="deviceNumber" aria-describedby="textHelp" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary inputDecoration" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btnCreateNewRegister text-white inputDecoration">Guardar Cambios</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default ModalWindows