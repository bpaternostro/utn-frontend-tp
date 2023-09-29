import React from 'react'
import { useParams } from 'react-router-dom'

import { buttonStyle, indexStyle, productDetailStyle, productCardStyle } from '../styles'
import { useGlobalContext } from '../context/GlobalContextProvider'

const ProductDetail = () => {
  const prod = useParams()
  const {counter, products, handleAddProduct, setActualProduct} = useGlobalContext()
  const producto = products[prod.id-1]
  return (
    <main>
            <div className={ productDetailStyle.productDetailContainer }>
                <div>
                    <h2 className={ productDetailStyle.productTitle }>{producto.name}</h2>
                </div>
                <div>
                    <div className={ indexStyle.boxContainer }>
                        <div className={ productDetailStyle.imageContainer }>
                            <img src={`/img/${producto.img.src}`} alt={producto.img.alt} />
                        </div>
                        <div className={ productDetailStyle.detailContainer }>
                            <span className={ productDetailStyle.price }>{`${producto.currency} ${producto.price.toLocaleString('en-US')}`}</span>
                            <span className={productCardStyle.categoryName}>{producto.category}</span>    
                            <span className={productCardStyle.stockMessage}>Stock Disponible <span className='stock'>({producto.stock})</span></span>
                        </div>
                    </div>
                    <div>
                        <p className={ productDetailStyle.productPara }>
                            {producto.description}
                        </p>
                        <div>
                            <span>Colores</span>
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
                            <button className={buttonStyle.btnPrimary} onClick={() => handleAddProduct(producto.id)}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
    </main>
  )
}

export default ProductDetail