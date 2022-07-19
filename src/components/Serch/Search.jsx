import React from 'react'

// import css
import './Search.css'
const Search = () => {
  return (
    <div className='Search container mt-4'>
        <label for="SearchInput" class="form-label fs-5">Buscar por Nombre / Número de registro</label>
      <div class="mb-3 d-flex col-9">
        <input type="text" class="form-control searchInput" id="SearchInput" aria-describedby="emailHelp" />
        <button type="submit" class="btn btnSearch ms-3 px-4 text-white">Buscar</button>
      </div>
    </div>
  )
}

export default Search