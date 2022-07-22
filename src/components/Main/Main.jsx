import React, { useState, useEffect } from 'react'
// import Components
import Search from '../Serch/Search';
import Table from '../Table/Table';
import ModalWindows from '../ModalWindows/ModalWindows';
// css import
import './Main.css';

const Main = () => {

  const [cows, setCows] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getCows = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('http://localhost:8080/cows')
      const cowsDb = await response.json()
      setIsLoading(false)
      setCows(cowsDb)

    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    getCows()
  }, [])

  return (
    <>
      <div className='container main mt-5'>
        <h5 className='userType'> Admin / Establecimiento</h5>
        <h2 className='mt-4 subtitle'>Establecimiento Ganadero</h2>

        <ModalWindows cows={cows} isLoading={isLoading} getCows={getCows} />

        <Search cows={cows} isLoading={isLoading} getCows={getCows} />
        <Table cows={cows} isLoading={isLoading} getCows={getCows} setCows={ setCows } />
      </div>
    </>
  )
}

export default Main