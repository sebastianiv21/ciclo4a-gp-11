import { Link } from 'react-router-dom'

const MesaDeAyuda = () => {
  return (
    <main className='container-fluid min-vh-100 d-grid mesadeayuda'>
      <article className='d-grid mt-auto justify-content-center align-items-center text-center'>
        <section className='card glass p-3'>
          <h2>Contáctenos</h2>
          <h3 className='fw-bold'>Cartagena de Indias</h3>
          <p className='fs-4 m-0'>
            <strong> Direccion:</strong> Calle 29D. #22-62 Ccial Caribe Plaza L
            1-42 <br />
            <strong> Télefono:</strong> 3906520 <strong> Extensión:</strong>{' '}
            1055 <br />
            <strong> Horarios:</strong> Lun-Sab 9:00 am - 7:00 pm
          </p>
        </section>
      </article>
      <footer className='d-flex justify-content-end mt-auto mb-2'>
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
      </footer>
    </main>
  )
}

export default MesaDeAyuda
