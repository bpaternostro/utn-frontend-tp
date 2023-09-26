import React from 'react'
import { useParams } from 'react-router-dom'

import { productDetailStyle } from '../styles'
import { buttonStyle } from '../styles'
import { useGlobalContext } from '../context/GlobalContextProvider'

const ProductDetail = () => {
  const prod = useParams()
  const {counter, products, handleAddProduct, setActualProduct} = useGlobalContext()
  const producto = products[prod.id-1]
  return (
    <>
        <main>
            <div className={ productDetailStyle.productDetailContainer }>
                <div>
                    <h1 className={ productDetailStyle.productTitle }>Apple Mac Book Pro</h1>
                </div>
                <div>
                    <div>
                        <img src={`/img/${producto.img.src}`} alt={producto.img.alt} />
                        <span className={ productDetailStyle.price }>{`${producto.currency} ${producto.price}`}</span>
                    </div>
                    <div>
                        <p className={ productDetailStyle.productPara }>
                            {producto.description}
                        </p>
                        <div>
                            <span>Colors</span>
                            <div>
                                {
                                    producto.colors.map(c => 
                                        <div className={ productDetailStyle.colorCircleContainer }>
                                            <div style={{backgroundColor: c.color}} className={productDetailStyle.colorCircle}></div>
                                            <span className={ productDetailStyle.colorCircleName }>{c.colorName} </span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <button className={buttonStyle.btnPrimary} onClick={() => handleAddProduct(producto.id)}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    
    
  )
}

export default ProductDetail