import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Contact, ProductDetail, Cart, UnderConstruction} from '../pages'

import '../styles/index.module.css'

const PageRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/detail/:id' element={<ProductDetail/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/under-construction' element={<UnderConstruction/>} />
            <Route path='*' element={<h2>Error 404 Page Not Found</h2>} /> 
        </Routes>
    </>
  )
}

export default PageRouter