import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: "_blank" },
    'click to visit google'
)
createRoot(document.getElementById('root')).render(
    //   reactElement
    <App />

)
