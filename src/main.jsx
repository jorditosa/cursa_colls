import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Inici from './pages/Inici'
import Voluntariat from './pages/Voluntariat'
import Recorreguts from './pages/Recorreguts'
import Reglament from './pages/Reglament'
import InfoUtil from './pages/InfoUtil'
import PoliticaPriv from './pages/PoliticaPriv'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Inici />,
      },
      {
        path: '/voluntariat',
        element: <Voluntariat />,
      },
      {
        path: '/recorreguts',
        element: <Recorreguts />
      },
      {
        path: '/reglament',
        element: <Reglament />
      },
      {
        path: '/infoutil',
        element: <InfoUtil />
      },
      {
        path: '/politicapriv',
        element: <PoliticaPriv />
      },  
    ]
  },
  {
    path: '/politicapriv',
    element: <PoliticaPriv />
  },  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
