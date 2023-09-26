import React from 'react'
import { CartProductcard } from '../components'
import {cartStyle, buttonStyle} from '../styles'

import { useGlobalContext } from '../context/GlobalContextProvider'
import { Link } from 'react-router-dom'

const Cart = () => {
  const {cart, cartTotal, currency} = useGlobalContext()
  return (
    <>
      <main>
          <div className={ cartStyle.cartProductContainer }>
            <div>
                <h2 className={ cartStyle.productTitle }>Carrito</h2>
            </div>
            <div className={ cartStyle.cartProducts}>
                {
                    cart.map((product) =>(
                        <CartProductcard {...product} key={product.id}/>
                    ))
                }
            </div>
            {
              cart.length ?
              <Link className={buttonStyle.btnPrimary} to="/" >Agregar mas productos</Link> :
              <span></span>
            }
          </div>
          <div className={ cartStyle.cartTotal }>
            <div className={ cartStyle.cartTotalContainer }>
              <span className={ cartStyle.productTitle }>Total</span>
              <span className={ cartStyle.productTitle }>{`${currency} ${cartTotal.toLocaleString('en-US')}`}</span>
              <button className={buttonStyle.btnPrimary}>Comprar</button>
            </div>
          </div>
          
      </main>
    </>
  )
}

export default Cart