import React, { useContext } from 'react'

import '../../styles/pagestyles/Cart/Cart-item/Cart-item.scss'

//Import Currency Svg from react-icons 📝
import { BiEuro as Euro } from 'react-icons/bi'
import { BsFillTrashFill as Trash } from 'react-icons/bs'
import { ShopContext } from '../../context/shop-context'
import { Link } from 'react-router-dom'

export const CartItem = (props) => {
  const { product_id, title, img_path, genre, price, type } = props.data
  const {
    goToProduct,
    updateCartItemCount,
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
  } = useContext(ShopContext)
  return (
    <div className='card' key={product_id}>
      <Link to='/actual-product'>
        <img
          className='card-img'
          src={require(`../../assets/designs/${type}/${img_path}.webp`)}
          alt='Card image'
          onClick={() => {
            goToProduct(product_id)
          }}
        />
      </Link>

      <div className='info-container'>
        <h3 className='card-title'>{title}</h3>

        {/* Hardcoded size - no sizes yet confirmed! */}
        <p className='size-text'>Size: M </p>

        <div className='state-wrapper'>
          <div className='price-container'>
            <p className='lowered-price'></p>
            <p className='actual-price'>
              {price}
              <Euro />
            </p>
          </div>

          <div className='countHandler'>
            <button className='removeCount' onClick={() => removeFromCart(product_id)}>
              -
            </button>
            <input
              value={cartItems[product_id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), product_id)}
            />
            <button className='addCount' onClick={() => addToCart(product_id)}>
              +
            </button>
            <Trash className='trash' onClick={() => removeAllFromCart(product_id)} />
          </div>
        </div>
      </div>
    </div>
  )
}
