import React from 'react'
// import Components
import Search from '../Serch/Search';
import Table from '../Table/Table';
import ModalWindows from '../ModalWindows/ModalWindows';

// css import
import './Main.css';

const Main = () => {
  return (
    <>
      <div className='container main mt-5'>
        <h5 className='userType'> Admin / Establecimiento</h5>
        <h2 className='mt-4 subtitle'>Establecimiento Ganadero</h2>
        <ModalWindows />
      <Search />
      <Table />
      </div>
    </>
  )
}

export default Main