import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { VariablesProvider } from "./Context/VariablesContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VariablesProvider>
      <App />
    </VariablesProvider>
  </StrictMode>,
)
