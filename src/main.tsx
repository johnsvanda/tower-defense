import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import 'aframe'
import '@c-frame/aframe-physics-system'
import './components/obstacle'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
