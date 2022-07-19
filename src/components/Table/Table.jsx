import React from 'react'

const Table = () => {
  return (
    <table className='table table-striped container'>
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
        <tr>
          <th scope="row">CSF345RFT5</th>
          <td>Nobillo</td>
          <td>100 Kg</td>
          <td>Mark</td>
          <td>Collar</td>
          <td>GS1256</td>
          <td>
            <button className='btn btn-outline-secondary'>Editar</button>
            <button className='btn btn-outline-secondary ms-2'>Borrar</button>
            </td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table