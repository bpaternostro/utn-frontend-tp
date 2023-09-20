import React, { useContext, createContext, useState, useEffect } from 'react'
import { productsDb } from '../products'

const GlobalContext = createContext()
const GlobalContextProvider = ({children}) => {
    const [products, setProductsToShow] = useState(productsDb)
    const [cart, setCart] = useState([])
    const [filterFields, setFilterFields] = useState([])
    const [categories, setCategories] = useState([...new Set(productsDb.map(item => item.category))])
    const isInCart = (id) => cart.some(product=> product.id == id)
    const findProductCart = (id) => cart.find(product => product.id == id)
    const findProductById = (id) => products.find(prod => Number(prod.id) === Number(id))
    const handleDeleteProduct = (id) => {
        if(findProductCart(id).quantity == 1){
            setCart(cart.filter((product) => product.id !== id))
        }else{
            cart.map((product) => {
                if (product.id === id){
                    product.quantity --
                }
                return product /* si no tiene el return, la funcion devuelve undefined, si o si tiene q tener*/
            })
        }
        
    }
    const handleAddProduct = (id) => {
        /**devuelve un unico producto */
        const productFound = findProductById(id)
        /*esto es para validar si el prodcuto ya esta en el carrito, para cambiar la cantidad de comprados*/
        if(isInCart(id)){
            cart.map((product) => {
                if (product.id === id){
                    product.quantity ++
                }
                return product /* si no tiene el return, la funcion devuelve undefined, si o si tiene q tener*/
            })
        }else{
            /* 
                esto es para no pisar los productos anteriores
                luego generamos una copia de productFound y agregamos la propiedad quantity 
            */
            setCart([...cart, {...productFound, quantity:1}])
        }
    }

    useEffect(() => {
        if(filterFields){
            setProductsToShow(filterFields.map((f) => ( products.filter( p => p[f.filterField] === f.filterValue))))
        }
    },[filterFields])

    const getTotalProductsInCart = () => {} /*ver codigo en GIT*/

    return (
        <GlobalContext.Provider value={{handleAddProduct, isInCart, findProductCart, handleDeleteProduct, cart, products, categories, setFilterFields}}>
            {children}
        </GlobalContext.Provider>
    )
}

/*cremos un custom Hook para utilizar el contexto */
export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalContextProvider