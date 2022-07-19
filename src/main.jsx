import React from 'react'
import ReactDOM from 'react-dom/client'
//import components
import App from './App'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//import css
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
      <Routes>

      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
