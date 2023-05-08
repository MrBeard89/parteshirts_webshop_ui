import '../../styles/Navbar/Navbar.scss'
import { Link } from 'react-router-dom'

import { Logo } from '../../components/Logo/Logo'

import { GiBurningSkull } from 'react-icons/gi'

export const Navbar = () => {
  var prevScrollpos = window.pageYOffset
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset
    if (prevScrollpos > currentScrollPos) {
      document.querySelector('.navbar-wrapper').style.top = '0'
    } else {
      document.querySelector('.navbar-wrapper').style.top = '-180px'
    }
    prevScrollpos = currentScrollPos
  }
  return (
    <>
      <div className='navbar-wrapper'>
        <div className='navbar-container'>
          <div className='navbar-logo'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>

          <ul className='navlinks-container'>
            <Link to='/'>
              <GiBurningSkull className='skull' />
              <li className='navlink'>Home</li>
            </Link>

            <Link to='/'>
              <GiBurningSkull className='skull' />
              <li className='navlink'>Search</li>
            </Link>

            <Link to='/'>
              <GiBurningSkull className='skull' />
              <li className='navlink'>T-shirts</li>
            </Link>

            <Link to='/'>
              <GiBurningSkull className='skull' />
              <li className='navlink'>Hoodies</li>
            </Link>

            <Link to='/'>
              <GiBurningSkull className='skull' />
              <li className='navlink'>FAQ's</li>
            </Link>

            <Link to='/'>
              <GiBurningSkull className='skull' />
              <li className='navlink'>Reviews</li>
            </Link>

            <Link to='/'>
              <GiBurningSkull className='skull' />
              <li className='navlink'>Cart</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  )
}
