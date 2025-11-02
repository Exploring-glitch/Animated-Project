import { Outlet } from '@tanstack/react-router'
import Stairs from './components/common/Stairs'
import Navbar from './components/navigation/Navbar'

const App = () => {

  return (
    <>
      <Stairs />
      <Navbar />
      <Outlet />
    </>
  )
}

export default App