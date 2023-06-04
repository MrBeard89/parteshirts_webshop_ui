import '../../styles/Navbar/Navbar.scss'
import { Link } from 'react-router-dom'

import { Logo } from '../../components/Logo/Logo'
import MobileVector from '../../assets/logo/emoji-vector.png'

import { GiBurningSkull, GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useState } from 'react'

export const Navbar = () => {
  //Usestate for navbar open,close
  const [navbarOpen, setNavbarOpen] = useState(false)

  //Usestate for cart open,close
  const [cartOpen, setCartOpen] = useState(false)

  var prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.querySelector('.navbar-wrapper').style.top = '0'
    } else {
      document.querySelector('.navbar-wrapper').style.top = '-80px'
    }
    prevScrollpos = currentScrollPos
  }

  return (
    <>
      <div className='navbar-wrapper'>
        <div className='navbar-container'>
          {/* Mobile icon container - menu*/}
          <span className='mobile-icon-container' onClick={() => setNavbarOpen((prev) => !prev)}>
            {navbarOpen ? (
              <AiOutlineClose className='menu-close' />
            ) : (
              <GiHamburgerMenu className='hamburger' />
            )}
          </span>

          <div className='navbar-logo'>
            <Link to='/home'>
              <Logo />
            </Link>
          </div>

          {/* Mobile icon container - cart*/}
          <span className='cart-icon-container' onClick={() => setCartOpen((prev) => !prev)}>
            {cartOpen ? (
              <AiOutlineClose className='cart-close' />
            ) : (
              <HiOutlineShoppingBag className='cart' />
            )}
          </span>

          <div className={`${navbarOpen ? 'navbar-mobile' : 'navlinks-container'}`}>
            <ul className='navlinks' onClick={() => setNavbarOpen(false)}>
              <Link to='/home'>
                <li className='navlink'>Home</li>
                <GiBurningSkull className='skull-back' />
              </Link>

              <Link to='/teeshirts'>
                <li className='navlink'>Teeshirts</li>
                <GiBurningSkull className='skull-back' />
              </Link>

              <Link to='/hoodies'>
                <li className='navlink'>Hoodies</li>
                <GiBurningSkull className='skull-back' />
              </Link>

              <Link to='/accessories'>
                <li className='navlink'>Accessories</li>
                <GiBurningSkull className='skull-back' />
              </Link>

              <Link to='/'>
                <li className='navlink'>Reviews</li>
                <GiBurningSkull className='skull-back' />
              </Link>
            </ul>

            <div className='img-container'>
              <img src={MobileVector} alt='Emoji-vector-img' />
            </div>
          </div>

          <div className={`${cartOpen ? 'cart-mobile' : 'cartlinks-container'}`}>
            <div className='cart-wrapper'>
              <h3 className='title'>Your shopping cart</h3>
              <p className='cart-message'>Your shopping cart is empty</p>
              <button className='goshoppingBtn' onClick={() => setCartOpen(false)}>
                Go Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
