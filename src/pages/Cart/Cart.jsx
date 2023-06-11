//Usestate,context
import React, { useContext } from 'react'

import '../../styles/pagestyles/Cart/Cart/Cart.scss'

//ShopContext
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../utils/products'
import { CartItem } from './Cart-item'
import { Footer } from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

//Import Currency Svg from react-icons 📝
import { BiEuro as Euro } from 'react-icons/bi'

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()

  return (
    <div className='cart-wrapper'>
      <div className='cart-container'>
        <h1 className='cart-title'>Your Cart</h1>
        {totalAmount === 0 ? (
          <>
            <h3 className='emptycart-text'>Your Cart is Empty</h3>
            <Link to='/home'>
              <button className='goshoppingBtn'>Go shopping</button>
            </Link>
          </>
        ) : (
          <>
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] !== 0) {
                return <CartItem key={product.id} data={product} />
              }
            })}
            <div className='checkout-container'>
              <p className='subtotal-text'>
                Subtotal:{' '}
                <span className='amount-text'>
                  <Euro /> {totalAmount}
                </span>
              </p>
              <div className='Btn-container'>
                <Link to='/home'>
                  <button className='continue-shop-btn'> Continue Shopping </button>
                </Link>
                <button className='checkout-btn'> Checkout </button>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  )
}
