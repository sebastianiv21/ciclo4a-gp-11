import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const Orden = ({ orden }) => {
  return (
    <tr>
      <td>{orden.id}</td>
      <td>{orden.fecha}</td>
      <td>{orden.ciudad}</td>
      <td>{orden.direccion}</td>
      <td>{orden.estado}</td>
      <td>
        <Link
          to='/dash/actualizar'
          className='btn btn-secondary btn-sm'
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </Link>
      </td>
    </tr>
  )
}

export default Orden
