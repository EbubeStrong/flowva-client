import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './providers/AuthProvider.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
        <Toaster richColors position="top-right" />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
