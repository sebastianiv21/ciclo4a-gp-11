import GrupoForm from './GrupoForm'

const CrearOrden = () => {
  return (
    <section className='p-0 mt-3'>
      <form>
        <h1>Crea una nueva orden</h1>
        <div className='row'>
          <GrupoForm
            type='date'
            id='fecha'
            name='fecha'
            label='Fecha de creación'
          />
          <GrupoForm
            type='time'
            id='hora'
            name='hora'
            label='Hora'
          />
        </div>
        <h3 className='m-0 mt-4'>Dimensiones</h3>
        <div className='row'>
          <GrupoForm
            type='number'
            id='largo'
            name='largo'
            label='Largo (m)'
          />
          <GrupoForm
            type='number'
            id='ancho'
            name='ancho'
            label='Ancho (m)'
          />
          <GrupoForm
            type='number'
            id='alto'
            name='alto'
            label='Alto (m)'
          />
          <GrupoForm
            type='number'
            id='peso'
            name='peso'
            label='Peso (kg)'
          />
        </div>
        <h3 className='m-0 mt-4'>Datos de envío</h3>

        <div className='row'>
          <GrupoForm
            type='text'
            id='direccion'
            name='direccion'
            label='Dirección de recogida'
          />
          <GrupoForm
            type='text'
            id='ciudad'
            name='ciudad'
            label='Ciudad origen'
          />
        </div>
        <div className='row'>
          <GrupoForm
            type='text'
            id='nombre'
            name='nombre'
            label='Nombre del destinatario'
          />
          <GrupoForm
            type='text'
            id='cedula'
            name='cedula'
            label='Cédula / Nit destinatario'
          />
        </div>
        <div className='row'>
          <GrupoForm
            type='text'
            id='destino'
            name='destino'
            label='Dirección de destino'
          />
          <GrupoForm
            type='text'
            id='ciudadDestino'
            name='ciudadDestino'
            label='Ciudad de destino'
          />
        </div>
        <div className='row'>
          <div className='col d-flex'>
            <button className='btn btn-secondary mx-auto w-25 mt-3 rounded-pill'>
              Crear orden
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default CrearOrden
