import { Routes, Route } from 'react-router-dom'
import { DashBoard } from './pages/dashboard'
import { Registro } from './components/registro/registro'
import { Login } from "./components/login"
import './assets/css/style.css'

function App() {

  return (
    <>
      <Routes>
        
        <Route path='/' element={ <Login /> } />
        <Route path='/registro' element={ <Registro /> } />
        <Route path='/dashboard' element={ <DashBoard /> } />
      </Routes>
    </>
  )
}

export default App
