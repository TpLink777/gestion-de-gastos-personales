import { Routes, Route } from 'react-router-dom'
import { DashBoard } from './pages/dashboard'



import { Seccion3_ } from './pages/home/Sobre Mi/components/seccion3'
import { Seccion2_ } from './pages/home/Sobre Mi/components/seccion2' 
import { Seccion1_ } from './pages/home/Sobre Mi/components/seccion1'
//  ---------------- sobre mi ----------------

import { Contacto } from './pages/home/Contactanos/components/contacto'

//  ---------------- contacto ----------------

import { Seccion4 } from './pages/home/Inicio/components/Seccion4'
import { Seccion3 } from './pages/home/Inicio/components/Seccion3'
import { Seccion2 } from './pages/home/Inicio/components/Seccion2'
import { Seccion1 } from './pages/home/Inicio/components/Seccion1'
//  ---------------- inicio ----------------

import { Registro } from './components/registro/registro'
import { Login } from "./components/login"
import { Layoutt } from './components/Layout'
import './assets/css/style.css'


function App() {

  return (
    <>

      <Routes>
        <Route element={<Layoutt />}>
          <Route path='/'
            element={
              <>
                <Seccion1 />
                <Seccion2 />
                <Seccion3 />
                <Seccion4 />
              </>
            }
          />

          <Route path='/sobre-mi'
            element={
              <>
                <Seccion1_ />
                <Seccion2_ />
                <Seccion3_ />
              </>
            }
          />

          <Route path='/contacto' element={<Contacto />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>



    </>
  )
}

export default App
