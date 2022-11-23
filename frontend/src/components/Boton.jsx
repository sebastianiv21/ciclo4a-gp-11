import { Link } from 'react-router-dom'

const Boton = ({ texto, ruta, color, outline, lg }) => {
  return (
    <Link
      to={ruta}
      className={`btn btn-${outline ? 'outline-' : ''}${color} ${
        lg ? 'btn-lg' : ''
      } rounded-pill border-2`}
    >
      {texto}
    </Link>
  )
}

export default Boton
