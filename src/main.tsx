import { createRoot } from 'react-dom/client'
import { StrictMode, Suspense } from 'react'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
<StrictMode>
  <Suspense>
    <App />
  </Suspense>
</StrictMode>
)
