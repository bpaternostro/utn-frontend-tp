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
                <h2 className={ cartStyle.productTitle }>Cart</h2>
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
              <Link className={buttonStyle.btnPrimary} to="/home" >Agregar mas productos</Link> :
              <span></span>
            }
          </div>
          <div className={ cartStyle.cartTotal }>
            <div className={ cartStyle.cartTotalContainer }>
              <span className={ cartStyle.productTitle }>Total</span>
              <span className={ cartStyle.productTitle }>{`${currency} ${cartTotal}`}</span>
              <button className={buttonStyle.btnPrimary}>Buy</button>
            </div>
          </div>
          
      </main>
    </>
  )
}

export default Cart