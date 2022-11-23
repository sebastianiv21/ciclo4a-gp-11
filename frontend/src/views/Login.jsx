import { Link } from 'react-router-dom'
import Boton from '../components/Boton'

const Login = () => {
  return (
    <main className='container-fluid min-vh-100 login bg-dark'>
      <nav className='navbar'>
        <Link
          to='/'
          className='navbar-brand ms-2'
        >
          <img
            src='logo.svg'
            alt='logo'
            width='50'
          />
          <span className='ms-2'>InstaYA</span>
        </Link>
      </nav>
      <article className='d-flex gap-3'>
        <section className='container p-0 col d-flex'>
          <img
            className='img-fluid rounded ms-auto camion-login'
            src='/images/login-camion.png'
            alt='camion'
            width='60%'
          />
        </section>
        <section className='col p-0 d-flex'>
          <div className='card bg-secondary me-auto my-auto ms-5'>
            <form className='text-center mx-5 my-3'>
              <div className='mb-3'>
                <label
                  htmlFor='usuario'
                  className='form-label fs-4 text-white'
                >
                  Usuario
                </label>
                <input
                  type='text'
                  className='form-control fs-4 rounded-pill'
                  id='usuario'
                  name='usuario'
                />
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='contraseña'
                  className='form-label fs-4 text-white'
                >
                  Contraseña
                </label>
                <input
                  type='password'
                  className='form-control fs-4 rounded-pill'
                  id='contraseña'
                  name='contraseña'
                />
              </div>
              <div className='mb-2'>
                <Boton
                  texto='Iniciar sesión'
                  ruta='/dash/listado'
                  color='dark'
                  lg
                />
              </div>
            </form>
            <div>
              <p className='text-center'>
                <span className='text-white me-2 mb-3'>
                  Aún no tienes cuenta?
                </span>
                <Link to='/registro'>Regístrate aquí</Link>
              </p>
              <p className='text-center'>
                <span className='text-white me-2 mb-3'>
                  Olvidaste tu contraseña?
                </span>
                <Link to='/recuperar'>Haz clic aquí</Link>
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

export default Login
