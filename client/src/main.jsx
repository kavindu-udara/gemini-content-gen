import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DarkThemeToggle, Flowbite } from "flowbite-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Flowbite>
    <App DarkThemeToggle={<DarkThemeToggle />} />
      {/* <DarkThemeToggle /> */}
    </Flowbite>
  </React.StrictMode>,
)
