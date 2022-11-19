import { Link } from 'react-router-dom'
import Orden from './Orden'
import { useState } from 'react'

const ListadoOrden = () => {
  const initialState = [
    {
      id: 53423123,
      fecha: '10/05/2022',
      ciudad: 'Cartagena de Indias',
      direccion: 'Mamonal km 6, Kangupor Ltda',
      estado: 'Guardado',
    },
    {
      id: 74732585,
      fecha: '05/06/2022',
      ciudad: 'Granada',
      direccion: 'Kra 22 calle 15 - 458',
      estado: 'Cancelado',
    },
    {
      id: 96346327,
      fecha: '05/06/2022',
      ciudad: 'Zabaneta',
      direccion: 'Via al Cuartel Kra22 -152',
      estado: 'Exitoso',
    },
  ]
  const [ordenes, setOrdenes] = useState(initialState)
  const tableContent = ordenes?.length
    ? ordenes.map((orden) => (
        <Orden
          key={orden.id}
          orden={orden}
        />
      ))
    : null
  return (
    <article>
      <table className='table table-primary table-striped table-hover mt-3 text-center'>
        <thead>
          {/* columnas de la tabla */}
          <tr>
            <th scope='col'># Servicio</th>
            <th scope='col'>Fecha de creación</th>
            <th scope='col'>Ciudad de destino</th>
            <th scope='col'>Dirección de entrega</th>
            <th scope='col'>Estado</th>
            <th scope='col'>Editar</th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    </article>
  )
}

export default ListadoOrden
