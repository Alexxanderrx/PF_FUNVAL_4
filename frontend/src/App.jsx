import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import InfoP from './components/InfoP/InfoP'
import InfoU from './components/InfoU/InfoU'
import Dashboard from './components/Dashboard'
import Parametros from './components/Parametros'
import Roles from './components/Roles'
import MenuName from './components/MenuName'


function App() {
  const toggleBarRef = useRef(null);
  const toggleSpinRef = useRef(null);
  const btnOpenRef = useRef(null);
  const [spin, setSpin] = useState(false);

  function open() {
    toggleBarRef.current.classList.toggle("collapse");
    setSpin(!spin);
    // console.log(spin);
    if (spin == true) {
      toggleSpinRef.current.style.transform = "rotate(180deg)";
      // toggleSpinRef.current.style.transform = "transition-duration: 500ms";
    } else if (spin == false) {
      toggleSpinRef.current.style.transform = "rotate(0deg)";
    }
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<MenuName render={() => <Dashboard />} />} />
          <Route path="/parametros" element={<MenuName render={() => <Parametros />} />} />
          <Route path="/roles" element={<MenuName render={() => <Roles />} />} />
          <Route path="/update" element={<InfoU />} />
        </Routes>


      </BrowserRouter >
    </>
  )
}

export default App
