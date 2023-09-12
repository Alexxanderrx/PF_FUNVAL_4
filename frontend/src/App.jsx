import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import InfoP from './components/InfoP'
import InfoU from './components/InfoU'
import Dashboard from './components/Dashboard'
import Roles from './components/Roles'
import MenuName from './components/MenuName'
import Usuarios from './components/Usuarios'
import Bitacoras from './components/Bitacoras'
import Enlaces from './components/Enlaces'
import Paginas from './components/Paginas'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/:id" element={<MenuName render={() => <Dashboard />} />} />
          <Route path="/roles/:id" element={<MenuName render={() => <Roles name="Role" />} />} />
          <Route path="/usuarios/:id" element={<MenuName render={() => <Usuarios name="Usuario" />} />} />
          <Route path="/bitacoras/:id" element={<MenuName render={() => <Bitacoras name="Bitácora" />} />} />
          <Route path="/enlaces/:id" element={<MenuName render={() => <Enlaces name="Enlace" />} />} />
          <Route path="/paginas/:id" element={<MenuName render={() => <Paginas name="Página" />} />} />
          <Route path="/profile/:id" element={<MenuName render={() => <InfoP name="Profile" />} />} />
          <Route path="/update/:id" element={<MenuName render={() => <InfoU name="Update" />} />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}
export default App