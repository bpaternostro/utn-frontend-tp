import React, { useContext, createContext, useState, useEffect } from 'react'
import { productsDb } from '../products'

const GlobalContext = createContext()
const GlobalContextProvider = ({children}) => {
    const [products, setProductsToShow] = useState(productsDb)
    const [cart, setCart] = useState([])
    const [cartTotal, setCartTotal] = useState([])
    const [error, setError] = useState()
    const [currency, setCurrency] = useState(productsDb[0].currency)
    const [filterFields, setFilterFields] = useState([])
    const [brands, setBrands] = useState([...new Set(productsDb.map(item => item.brand))])
    const [categories, setCategories] = useState([...new Set(productsDb.map(item => item.category))])
    const isInCart = (id) => cart.some(product=> product.id == id)
    const findProductCart = (id) => cart.find(product => product.id == id)
    const findProductById = (id) => products.find(prod => Number(prod.id) === Number(id))
    const handleClickBtn = (id, event) => {
        const elements = document.querySelector('.msg');
        const productFound = findProductCart(id)
        setError(null)
        if (event.target.className.includes("minus")){
            productFound.quantity > 0 ? productFound.quantity -- : setError("Superaste el limite inferior")
        }else{
            productFound.quantity < productFound.stock ? productFound.quantity ++ : setError("Superaste el limite superior")
        }
        setCart([...cart])
    }
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

    const handleFilterFields = (filter) => {
        filterFields.includes(filter) ? setFilterFields(filterFields.filter((f) => f!== filter)) : setFilterFields([...filterFields, filter])
    }

    const productMustBeDisplayed = (product) => {
        return filterFields.map(f => product[f.split('-')[0]] === f.split('-')[1]).filter(v => v).length
    }

    const filterBySearchInputBox = (evento) => {
        let normalizedString = evento.target.value.toLowerCase()
        if(normalizedString) {
            setProductsToShow(products.filter(p => p.name.toLowerCase().includes(normalizedString) || p.category.toLowerCase().includes(normalizedString) || p.brand.toLowerCase().includes(normalizedString)))
        }else{
            filterFields.length ? setProductsToShow(productsDb.filter(p => productMustBeDisplayed(p))) : setProductsToShow(productsDb)
        }
    }

    useEffect(() => {
        filterFields.length ? setProductsToShow(productsDb.filter(p => productMustBeDisplayed(p))) : setProductsToShow(productsDb)
    },[filterFields])

    useEffect(() => {
        setCartTotal(cart.reduce( (total, current) => (total = total + (current.price * current.quantity)), 0).toFixed(2))
    },[cart])
    
    return (
        <GlobalContext.Provider value={{brands, cart, cartTotal, products, categories, currency, filterFields, handleAddProduct, isInCart, findProductCart, filterBySearchInputBox, handleDeleteProduct, handleFilterFields, handleClickBtn}}>
            {children}
        </GlobalContext.Provider>
    )
}

/*cremos un custom Hook para utilizar el contexto */
export const useGlobalContext = () => useContext(GlobalContext)

export default GlobalContextProvider