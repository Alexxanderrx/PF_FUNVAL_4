import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import InfoP from './components/InfoP/InfoP'
import InfoU from './components/InfoU/InfoU'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/info" element={<InfoP />} />
          <Route path="/update" element={<InfoU />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
