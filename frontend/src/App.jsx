import { Routes, Route } from 'react-router-dom'
// componentes
import Layout from './components/Layout'
import Inicio from './views/Inicio'
import MesaDeAyuda from './views/MesaDeAyuda'
import Login from './views/Login'
import Registro from './views/Registro'
import DashLayout from './components/DashLayout'
import ListadoOrden from './components/ListadoOrden'
import CrearOrden from './components/CrearOrden'
import ActualizarOrden from './components/ActualizarOrden'
import RecuperarContrasena from './components/RecuperarContrasena'

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}
      >
        {/* rutas publicas */}
        <Route
          index
          element={<Inicio />}
        />
        <Route
          path='login'
          element={<Login />}
        />
        <Route
          path='contacto'
          element={<MesaDeAyuda />}
        />
        <Route
          path='registro'
          element={<Registro />}
        />
        <Route
          path='recuperar'
          element={<RecuperarContrasena />}
        />
        {/* rutas privadas */}
        <Route
          path='dash'
          element={<DashLayout />}
        >
          <Route
            path='listado'
            element={<ListadoOrden />}
          />
          <Route
            path='crear'
            element={<CrearOrden />}
          />
          <Route
            path='actualizar'
            element={<ActualizarOrden />}
          />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
