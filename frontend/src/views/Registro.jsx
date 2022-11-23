import { Link } from 'react-router-dom'
import Boton from '../components/Boton'

const Registro = () => {
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
            src='/images/registro.png'
            alt='camion'
            width='60%'
          />
        </section>
        <section className='col p-0 d-flex'>
          <div className='card bg-secondary me-auto my-auto ms-5'>
            <form className='text-center mx-5 my-3'>
              <div className='mb-3 mt-2'>
                <h2>Registro de Usuario</h2>
              </div>
              <div className='mb-3'>
                <label
                  htmlFor='nombres'
                  className='form-label fs-4 text-white'
                >
                  Nombre completo
                </label>
                <input
                  type='text'
                  className='form-control fs-4 rounded-pill'
                  id='nombres'
                  name='nombres'
                />
              </div>
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
              <div className='mb-3'>
                <label
                  htmlFor='email'
                  className='form-label fs-4 text-white'
                >
                  Correo electrónico
                </label>
                <input
                  type='email'
                  className='form-control fs-4 rounded-pill'
                  id='email'
                  name='email'
                />
              </div>
              <div className='mb-2'>
                <Boton
                  texto='Registrarse'
                  ruta='/login'
                  color='dark'
                  lg
                />
              </div>
            </form>
            <div>
              <p className='text-center'>
                <span className='text-white me-2 mb-3'>
                  Ya tienes una cuenta?
                </span>
                <Link to='/login'>Inicia sesión aquí</Link>
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

export default Registro
