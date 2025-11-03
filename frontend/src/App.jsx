import { Outlet } from '@tanstack/react-router'
import Stairs from './components/common/Stairs'
import Navbar from './components/navigation/Navbar'
import FullScreenNav from './components/navigation/FullScreenNavbar'

const App = () => {

  return (
    <>
      <Stairs />
      <Navbar />
      <FullScreenNav />
      <Outlet />
    </>
  )
}

export default App