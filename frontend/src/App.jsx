import { Outlet } from '@tanstack/react-router'
import Stairs from './components/common/Stairs'
import Navbar from './components/navigation/Navbar'
import FullScreenNavbar from './components/navigation/FullScreenNavbar'

const App = () => {

  return (
    <>
      <Stairs />
      <Navbar />
      <FullScreenNavbar />
      <Outlet />
    </>
  )
}

export default App

{/*<Stairs />
  <Navbar />
<Outlet />*/}