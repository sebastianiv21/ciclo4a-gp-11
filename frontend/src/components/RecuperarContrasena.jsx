import { Link } from 'react-router-dom'

const RecuperarContrasena = () => {
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
                  htmlFor='email'
                  className='form-label fs-4 text-white'
                >
                  Correo electrónico
                </label>
                <input
                  type='text'
                  className='form-control fs-4 rounded-pill'
                  id='email'
                  name='email'
                />
              </div>

              <div className='mb-2'>
                <Link
                  to='/login'
                  className='btn btn-dark btn-lg rounded-pill border-2'
                >
                  Recuperar contraseña
                </Link>
              </div>
            </form>
            <div>
              <p className='text-center'>
                <span className='text-white me-2 mb-3'>
                  Deseas iniciar sesión?
                </span>
                <Link to='/login'>Haz clic aquí</Link>
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}

export default RecuperarContrasena
