import React, { useState } from 'react'
import { navbarStyle, indexStyle } from '../../styles'
import {BsFillCartFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {ImHome3} from 'react-icons/im'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/GlobalContextProvider'

const Navbar = () => {
    const {cart, filterBySearchInputBox} = useGlobalContext()
    const [show, setShow] = useState(false)
    const handleShowSearch = () => {
        setShow(!show)
    }
    return (
        <header>
            <div>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                        <circle cx="13.5" cy="13.5" r="13.5" fill="#4A55A2"/>
                    </svg>
                </span>
                <span className={navbarStyle.logoBrand}>Bruno's <br></br>Marketplace</span>
            </div>
            <div className={navbarStyle.searchContainer}>
                <button>
                    <AiOutlineSearch size={18}/>
                </button>
                <input type="text" name="search" id={navbarStyle.searchMobile} placeholder="Buscar ..." onChange={filterBySearchInputBox}/>
            </div>
            <div>
                <nav>
                    <Link to="/contact">Contacto</Link>
                    <Link to="/">
                        <ImHome3 size={18}/>
                    </Link>
                    <Link to="" id={navbarStyle.searchNavIcon} onClick={handleShowSearch}>
                        {
                            show ? <AiOutlineSearch color="#00CED1" size={18}/>: <AiOutlineSearch size={18}/>
                        }
                    </Link>
                    <Link to="/cart" className={navbarStyle.cartBanner}>
                        <BsFillCartFill size={18}/>
                        <span className={navbarStyle.cartBubble}>{cart.length}</span>
                    </Link>
                    
                </nav>
                {
                    show && <span style={{"display":"block"}}><input type="text" name="search" id={navbarStyle.searchMobile} placeholder="Buscar ..." onChange={filterBySearchInputBox}/></span>
                }
            </div>
        </header>
    )
    }

export default Navbar