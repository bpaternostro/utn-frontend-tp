import React, { useState } from 'react'
import { buttonStyle } from '../../styles'
import { productCardStyle } from '../../styles'

import { useGlobalContext } from '../../context/GlobalContextProvider'

const Productcard = ({ name, category, price, currency, stock, img, id }) => {
  const {handleAddProduct} = useGlobalContext()
  return (
    <div className={productCardStyle.product}>
        <span className={productCardStyle.imageContainer}>
          <img src={`/img/${img.src}`} alt={img.alt} />
        </span>
        <span className={productCardStyle.categoryName}>{category}</span>
        <span className={productCardStyle.productName}>{name}</span>
        <span className={productCardStyle.priceBanner}>
            <span className={productCardStyle.currency}>{currency}</span>
            <span className={productCardStyle.price}>{price}</span>
        </span>
        <span className={productCardStyle.stockBanner}>
            {stock > 0 ? <span className={productCardStyle.stockMessage}>Stock Disponible <span className='stock'>({stock})</span></span>: <span className={productCardStyle.stockMessage}>Sin Stock</span>}
        </span>
        {stock > 0 ? <button className={buttonStyle.btnPrimary} onClick={() => handleAddProduct(id)}>Add to cart</button>: <button className={buttonStyle.disableBtnPrimary} disabled>Add to cart</button>}
    </div>
  )
}

export default Productcard