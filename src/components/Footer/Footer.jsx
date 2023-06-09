import '../../styles/componentstyles/Home/Footer/Footer.scss'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { GiBurningSkull } from 'react-icons/gi'

//Import credit card pngs
import Visa from '../../assets/credit-card/visa.png'
import Mastercard from '../../assets/credit-card/mastercard.png'
import Paypal from '../../assets/credit-card/paypal.png'

export const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='decor-line'></div>
      <div className='footer-container'>
        <div className='newsletter-container'>
          <h3 className='newsletter-title'>Newsletter</h3>
          <p className='newsletter-text'>Subscribe to our newsletter and receive news first!</p>

          <div className='input-container'>
            <input type='email' autoComplete='off' placeholder='Your e-mail address' />
            <button>Enter</button>
          </div>

          <p className='input-footer'>
            By clicking "Register" you accept our <Link>Privacy policy</Link>.
          </p>
        </div>
        <div className='footer-links'>
          <ul className='general'>
            <h2 className='links-title'>General</h2>
            <Link className='footer-link'>
              <li>About Us</li>
            </Link>
            <Link className='footer-link'>
              <li>Customer Reviews</li>
            </Link>
            <Link className='footer-link'>
              <li>Contact</li>
            </Link>
            <Link className='footer-link'>
              <li>Search</li>
            </Link>
          </ul>

          <ul className='info-order'>
            <h2 className='links-title'>Info about your order</h2>
            <Link className='footer-link'>
              <li>Register return</li>
            </Link>
            <Link className='footer-link'>
              <li>Shipping conditions</li>
            </Link>
            <Link className='footer-link'>
              <li>Refund Policy</li>
            </Link>
          </ul>

          <ul className='legal-info'>
            <h2 className='links-title'>Legal information</h2>
            <Link className='footer-link'>
              <li>Imprint</li>
            </Link>
            <Link className='footer-link'>
              <li>Privay policy</li>
            </Link>
            <Link className='footer-link'>
              <li>Shipping conditions</li>
            </Link>
            <Link className='footer-link'>
              <li>General terms</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className='copyright-container'>
        <p className='copyright'>&copy; 2023 Parteeshirts | All rights reserved</p>
        <div className='payment-card-container'>
          <img className='visa' src={Visa} alt='Visa' />
          <img className='mastercard' src={Mastercard} alt='Mastercard' />
          <img className='paypal' src={Paypal} alt='Paypal' />
        </div>
      </div>
    </div>
  )
}
