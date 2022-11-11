import { Routes, Route } from 'react-router-dom'
// componentes
import Layout from './components/Layout'
import Inicio from './views/Inicio'
import MesaDeAyuda from './views/MesaDeAyuda'
import Login from './views/Login'

const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}
      >
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
      </Route>
    </Routes>
  )
}

export default App
