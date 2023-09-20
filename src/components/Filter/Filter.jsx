import React from 'react'
import { filterStyle } from '../../styles'
import { useGlobalContext } from '../../context/GlobalContextProvider'

const Filter = () => {
  const {categories, setFilterFields} = useGlobalContext()
  return (
    <div className={ filterStyle.filter }>
      {
        categories.map((category) => (
          <div>
            <button onClick={() => setFilterFields({filterField:"category", filterValue:{category}})}>{category}</button>
          </div>
        ))
      }
    </div>
  )
}

export default Filter