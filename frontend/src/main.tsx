import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
import Auth0ProviderWithNavigate from './auth/Auth0ProviderWithNavigate'
import { Providers } from './Providers'

import './global.css'
import AppRoutes from './AppRoutes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

  <Router>
    <Providers>
    <Auth0ProviderWithNavigate>
    <AppRoutes/>
    </Auth0ProviderWithNavigate>
    </Providers>
  </Router>
  </React.StrictMode>,
)
