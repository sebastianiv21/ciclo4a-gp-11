import DashHeader from './DashHeader'
import { Outlet } from 'react-router-dom'

const DashLayout = () => {
  return (
    <main className='container-fluid min-vh-100 p-0 d-flex flex-column'>
      <DashHeader />
      <article className='container'>
        <Outlet />
      </article>
    </main>
  )
}

export default DashLayout
