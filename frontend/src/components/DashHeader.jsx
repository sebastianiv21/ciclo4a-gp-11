import { Link } from 'react-router-dom'
// componentes
import Boton from './Boton'

const DashHeader = () => {
  return (
    <header className='navbar navbar-dark bg-dark'>
      <Link
        to='/dash/listado'
        className='navbar-brand ms-2'
      >
        <img
          src='/logo.svg'
          alt='logo'
          width='50'
        />
        <span className='ms-2 text-primary'>InstaYA</span>
      </Link>
      <nav>
        <ul className='navbar-nav d-flex flex-row gap-3 me-2'>
          <li className='nav-item'>
            <Link
              to='/dash/crear'
              className='nav-link'
            >
              Crear orden
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/dash/listado'
              className='nav-link'
            >
              Listado de órdenes
            </Link>
          </li>
          <li className='nav-item'>
            <Boton
              texto='Cerrar sesión'
              ruta='/'
              color='primary'
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default DashHeader
