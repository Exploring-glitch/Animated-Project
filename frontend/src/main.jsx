import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
export const queryClient = new QueryClient()
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routing/routeTree.js'
import { NavProvider } from './components/context/NavContext.jsx'




const router = createRouter({
  routeTree,
  context :{ 
    queryClient
  }
})


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <NavProvider>
      <RouterProvider router={router} />
    </NavProvider>
  </QueryClientProvider>,
)
