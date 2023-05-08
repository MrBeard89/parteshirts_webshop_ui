import '../../styles/Navbar/Navbar.scss'
import { Link } from 'react-router-dom'

import { Logo } from '../../components/Logo/Logo'

import { GiBurningSkull } from 'react-icons/gi'

export const Navbar = () => {
  return (
    <>
      <div className='navbar-wrapper'>
        <div className='navbar-logo'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>

        <div className='navbar-container'>
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
