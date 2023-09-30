import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalContextProvider from './context/GlobalContextProvider.jsx'
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById('root')).render(
    <GlobalContextProvider>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </GlobalContextProvider>
)
