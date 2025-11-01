import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
export const queryClient = new QueryClient()
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routing/routeTree.js'

import Stairs from './components/common/Stairs.jsx'



const router = createRouter({
  routeTree,
  context :{ 
    queryClient
  }
})


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Stairs />
    <RouterProvider router={router} />
  </QueryClientProvider>,
)
