import React,{useState} from 'react'

// import css
import './Search.css'
const Search = () => {
  const [serch, setSerch] = useState("")

  const handleChange = ({target})=>{
    setSerch(target.value)
    console.log(target.value);
  }


  return (
    <div className='Search container mt-4'>
        <label htmlFor="SearchInput" className="form-label fs-5">Buscar por Nombre / Número de registro</label>
      <div className="mb-3 d-flex col-9">
        <input type="text" className="form-control searchInput" id="SearchInput" aria-describedby="emailHelp" onChange={handleChange}/>
        <button type="submit" className="btn btnSearch ms-3 px-4 text-white">Buscar</button>
      </div>
    </div>
  )
}

export default Search