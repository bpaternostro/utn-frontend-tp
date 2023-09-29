import React, { useState } from 'react'
import { navbarStyle, indexStyle } from '../../styles'
import {BsFillCartFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaShop} from 'react-icons/fa6'
import {ImHome3} from 'react-icons/im'
import { Link, useLocation } from 'react-router-dom'
import { useGlobalContext } from '../../context/GlobalContextProvider'

const Navbar = () => {
    const {cart, filterBySearchInputBox} = useGlobalContext()
    const [show, setShow] = useState(false)
    const location = useLocation();
    const handleShowSearch = () => {
        setShow(!show)
    }
    return (
        <header>
            <div className={navbarStyle.logoBrandContainer}>
                <span><FaShop size={35}color="#FFF" /></span>
                <span className={navbarStyle.logoBrand}>Bruno's <br></br>Marketplace</span>
            </div>
            {
                location.pathname ==='/' ?
                <div className={navbarStyle.searchContainer}>
                    <span>
                        <AiOutlineSearch size={18}/>
                    </span>
                    <input type="text" name="search" id={navbarStyle.searchMobile} placeholder="Buscar ..." onChange={filterBySearchInputBox} />
                </div>:<div></div>
            }
            <div>
                <nav>
                    <Link to="/contact">
                        Contacto
                        { location.pathname ==='/contact' ? <span className={navbarStyle.sectionMark} style={{display:"block"}}></span> : <span className={navbarStyle.sectionMark} style={{display:"none"}}></span>}
                    </Link>
                    <Link to="/">
                        <ImHome3 size={18}/>
                        { location.pathname ==='/' ? <span className={navbarStyle.sectionMark} style={{display:"block"}}></span> : <span className={navbarStyle.sectionMark} style={{display:"none"}}></span>}
                    </Link>
                    <Link to="" id={navbarStyle.searchNavIcon} onClick={handleShowSearch}>
                        {
                            show ? <AiOutlineSearch color="#00CED1" size={18} />: <AiOutlineSearch size={18}/>
                        }
                    </Link>
                    <Link to="/cart" className={navbarStyle.cartBanner}>
                        <div><span className={navbarStyle.cartBubble}>{cart.length}</span></div>
                        <BsFillCartFill size={18}/>
                        { location.pathname ==='/cart' ? <span className={navbarStyle.sectionMark} style={{display:"block"}}></span> : <span className={navbarStyle.sectionMark} style={{display:"none"}}></span>}
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