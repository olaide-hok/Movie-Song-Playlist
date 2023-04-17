import React from 'react'
import 'bulma/css/bulma.css'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

// import {createRoot} from 'react-dom/client'
// import App from './App'

// const rootElement = document.getElementById('root')
// const root = createRoot(rootElement)

// root.render(<App />)
