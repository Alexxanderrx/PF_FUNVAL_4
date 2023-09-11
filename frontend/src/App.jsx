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


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<MenuName render={() => <Dashboard />} />} />
          <Route path="/roles" element={<MenuName render={() => <Roles name="Roles" />} />} />
          <Route path="/usuarios" element={<MenuName render={() => <Usuarios name="Usuarios" />} />} />
          <Route path="/bitacoras" element={<MenuName render={() => <Bitacoras name="Bitácoras" />} />} />
          <Route path="/enlaces" element={<MenuName render={() => <Enlaces name="Enlaces" />} />} />
          <Route path="/profile" element={<MenuName render={() => <InfoP name="Profile" />} />} />
          <Route path="/update" element={<MenuName render={() => <InfoU name="Update" />} />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}
export default App