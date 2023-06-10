//Usestate,context
import React, { useContext } from 'react'

import '../../styles/pagestyles/Cart/Cart/Cart.scss'

//ShopContext
import { ShopContext } from '../../context/shop-context'
import { PRODUCTS } from '../../utils/products'
import { CartItem } from './Cart-item'
import { Footer } from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { cartItems, itemInCart } = useContext(ShopContext)

  return (
    <div className='cart-wrapper'>
      <div className='cart-container'>
        <h1 className='cart-title'>Your Cart</h1>
        {itemInCart === false ? (
          <>
            <h3 className='emptycart-text'>Your Cart is Empty</h3>
            <Link to='/home'>
              <button className='goshoppingBtn'>Go shopping</button>
            </Link>
          </>
        ) : (
          PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem data={product} />
            }
          })
        )}
      </div>
      <Footer />
    </div>
  )
}
