import '../../styles/componentstyles/Home/Navbar/Navbar.scss'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

import { Logo } from '../../components/Logo/Logo'
import MobileVector from '../../assets/logo/emoji-vector.png'

import { GiBurningSkull, GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { useContext, useState } from 'react'
import { ShopContext } from '../../context/shop-context'

export const Navbar = () => {
  const { getTotalItemCount } = useContext(ShopContext)
  let totalCartCount = getTotalItemCount()
  //Usestate for navbar open,close
  const [navbarOpen, setNavbarOpen] = useState(false)

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
            <HashLink to='/home#home'>
              <Logo />
            </HashLink>
          </div>

          {/* Mobile icon container - cart*/}
          <Link to='/cart'>
            <span className='cart-icon-container'>
              <HiOutlineShoppingBag className='cart-icon' />
              {totalCartCount === 0 ? '' : <p className='totalcartcount'>{totalCartCount}</p>}
            </span>
          </Link>
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

              <HashLink to='/home#contact'>
                <li className='navlink'>Contact Us</li>
                <GiBurningSkull className='skull-back' />
              </HashLink>

              <Link to='/'>
                <li className='navlink'>Reviews</li>
                <GiBurningSkull className='skull-back' />
              </Link>
            </ul>

            <div className='img-container'>
              <img src={MobileVector} alt='Emoji-vector-img' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
