import { Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <main className='container-fluid min-vh-100 inicio'>
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
      <article className='d-grid justify-content-end align-items-center me-5'>
        <section>
          <h1 className='text-primary'>InstaYA</h1>
          <p className='fs-3 fst-italic lh-sm text-white'>
            Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
            Tempora, harum?
          </p>
          <div className='d-flex gap-3'>
            <Link
              to='/login'
              className='btn btn-outline-primary btn-lg rounded-pill border-2'
            >
              Iniciar sesión
            </Link>
            <Link
              to='/contacto'
              className='btn btn-primary btn-lg rounded-pill border-2'
            >
              Mesa de ayuda
            </Link>
          </div>
        </section>
      </article>
    </main>
  )
}

export default Inicio
