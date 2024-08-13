import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NewRoutineProvider } from './contexts/NewRoutineContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NewRoutineProvider>
      <App />
    </NewRoutineProvider>
  </StrictMode>,
)
