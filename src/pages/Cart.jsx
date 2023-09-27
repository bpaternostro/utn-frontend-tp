import React from 'react'
import { CartProductcard } from '../components'
import {cartStyle, buttonStyle, indexStyle} from '../styles'

import { useGlobalContext } from '../context/GlobalContextProvider'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cart, cartTotal, currency} = useGlobalContext()
  return (
    
    <main>
      <div className={ cartStyle.cart }>
        <div className={ cartStyle.cartProductContainer }>
          <div className={ cartStyle.cartProducts}>
              {
                  cart.map((product) =>(
                      <CartProductcard {...product} key={product.id}/>
                  ))
              }
          </div>
          <div>
            {
              cart.length ?
              <Link className={buttonStyle.btnPrimary} to="/" >Agregar mas productos</Link> :
              <span></span>
            }
          </div>

        </div>
        <div className={ cartStyle.cartTotal }>
          <div className={`${ cartStyle.cartTotalContainer} ${indexStyle.boxContainer}`}  >
            <span className={ cartStyle.productTitle }>Total</span>
            <span className={ cartStyle.totalPrice }>{`${currency} ${cartTotal.toLocaleString('en-US')}`}</span>
            <button className={buttonStyle.btnPrimary}>Compra</button>
          </div>
        </div>
      </div>        
    </main>
    
  )
}

export default Cart