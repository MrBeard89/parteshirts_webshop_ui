import '../../styles/Navbar/Navbar.scss'
import { Link } from 'react-router-dom'

import { Logo } from '../../components/Logo/Logo'

export const Navbar = () => {
  return (
    <>
      <div className='navbar-wrapper'>
        <div className='navbar-logo'>
          <Logo />
        </div>

        <div className='navbar-container'>
          <ul className='navlinks-container'>
            <li className='navlink'>Home</li>
            <li className='navlink'>Search</li>
            <li className='navlink'>T-shirts</li>
            <li className='navlink'>Hoodies</li>
            <li className='navlink'>FAQ's</li>
            <li className='navlink'>Reviews</li>
            <li className='navlink'>Cart</li>
          </ul>
        </div>
      </div>
    </>
  )
}
