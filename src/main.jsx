import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { FavoritosProvider } from './contexto/FavoritosContext.jsx'
import AuthProvider from './contexto/AuthContext.jsx'

//BrowserRouter habilita React Router activando el sistema de rutas
//App es el componente principal
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>

        <FavoritosProvider>
          <App />
        </FavoritosProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
)

