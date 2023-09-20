import React, { useState } from 'react'
import { buttonStyle } from '../../styles'
import { cartProductCardStyle } from '../../styles'

import { useGlobalContext } from '../../context/GlobalContextProvider'

const CardProductcard = ({ name, category, price, currency, stock, img, id }) => {
  const {handleDeleteProduct} = useGlobalContext()
  return (
    <div className={cartProductCardStyle.product}>
        <span className={cartProductCardStyle.imageContainer}>
          <img src={`/img/${img.src}`} alt={img.alt} />
        </span>
        <span className={cartProductCardStyle.productBanner}>
          <span className={cartProductCardStyle.categoryName}>{category}</span>
          <span className={cartProductCardStyle.productName}>{name}</span>
        </span>
        <span className={cartProductCardStyle.priceBanner}>
            <span className={cartProductCardStyle.currency}>{currency}</span>
            <span className={cartProductCardStyle.price}>{price}</span>
        </span>
        <button className={buttonStyle.btnPrimary} onClick={() => handleDeleteProduct(id)}>Remove</button>
    </div>
  )
}

export default CardProductcard