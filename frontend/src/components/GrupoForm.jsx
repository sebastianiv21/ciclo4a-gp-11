const GrupoForm = ({ type, id, name, label }) => {
  return (
    <div className='col row g-3 align-items-center d-flex'>
      <div className='col-auto'>
        <label
          htmlFor={id}
          className='col-form-label'
        >
          {label}
        </label>
      </div>
      <div className='col-auto flex-grow-1'>
        <input
          type={type}
          name={name}
          id={id}
          className='form-control'
        />
      </div>
    </div>
  )
}

export default GrupoForm
