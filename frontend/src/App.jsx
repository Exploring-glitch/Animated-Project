import { Outlet } from '@tanstack/react-router'
import Stairs from './components/common/Stairs'

const App = () => {

  return (
    <>
      <Stairs>
        <Outlet />
      </Stairs>
    </>
  )
}

export default App