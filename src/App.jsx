import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './assets/components/Navbar'
import Home from './assets/views/Home'
import Contacto from './assets/views/Contacto'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
    </Routes>
    </>
  )
}

export default App
