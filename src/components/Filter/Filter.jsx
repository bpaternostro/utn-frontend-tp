import React from 'react'
import { filterStyle } from '../../styles'
import { useGlobalContext } from '../../context/GlobalContextProvider'

const Filter = () => {
  const {brands, categories, filterFields, handleFilterFields} = useGlobalContext()
  return (
    <div className={ filterStyle.filter }>
      <div className={ filterStyle.appliedFilterContainer }>
        <span>Filtros aplicados</span>
          {
            filterFields.filter(f => f.includes("category")).length ?
            <div>
              <span>Categoria</span>
              {
                filterFields.filter(f => f.includes("category")).map((filter) =>(
                  <div key={filter}>
                    <span className={ filterStyle.appliedFilter} onClick={() => handleFilterFields(filter)}>{filter.split('-')[1]}</span>
                  </div>
                ))
              }
            </div> : <div></div>
          }
          {
            filterFields.filter(f => f.includes("brand")).length ?
            <div>
            <span>Marca</span>
            {
              filterFields.filter(f => f.includes("brand")).map((filter) =>(
                <div key={filter}>
                  <span className={ filterStyle.appliedFilter} onClick={() => handleFilterFields(filter)}>{filter.split('-')[1]}</span>
                </div>
              ))
            }
          </div> : <div></div>
          }
      </div>
      <div className={ filterStyle.filterContainer }>
        <span>Filtros</span>
        <span>Categoria</span>
        <div>
          {
            categories.map((category) => (
              <div key={category}>
                <button onClick={() => handleFilterFields(`category-${category}`)}>{category}</button>
              </div>
            ))
          }
        </div>
        <span>Marca</span>
        <div>
          {
            brands.map((brand) => (
              <div key={brand}>
                <button onClick={() => handleFilterFields(`brand-${brand}`)}>{brand}</button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Filter