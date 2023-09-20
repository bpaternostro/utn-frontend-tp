import React from 'react'
import { useParams } from 'react-router-dom'

import { productDetailStyle } from '../styles'
import { buttonStyle } from '../styles'
import { useGlobalContext } from '../context/GlobalContextProvider'

const ProductDetail = () => {
  const prod = useParams()
  const {products} = useGlobalContext()
  const producto = products[prod.id] 
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
                        <span className={ productDetailStyle.price }>$950.00</span>
                    </div>
                    <div>
                        <p className={ productDetailStyle.productPara }>
                            Description:<br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere libero nec mi molestie rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                        </p>
                        <div>
                            <span>Colors</span>
                            <div>
                                <div className={ productDetailStyle.colorCircleContainer }>
                                    <div className={  `${productDetailStyle.colorCircle} ${productDetailStyle.black}` }></div>
                                    <span className={ productDetailStyle.colorCircleName }>Black</span>
                                </div>
                                <div className={ productDetailStyle.colorCircleContainer }>
                                    <div className={ `${productDetailStyle.colorCircle} ${productDetailStyle.orange}`}></div>
                                    <span className={ productDetailStyle.colorCircleName }>Orange</span>
                                </div>
                                <div className={ productDetailStyle.colorCircleContainer }>
                                    <div className={  `${productDetailStyle.colorCircle} ${productDetailStyle.grey}` }></div>
                                    <span className={ productDetailStyle.colorCircleName }>Grey</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className={ buttonStyle.btnPrimary }>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    
    
  )
}

export default ProductDetail