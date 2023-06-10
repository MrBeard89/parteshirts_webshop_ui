import React from 'react'

import '../../styles/pagestyles/Cart/Cart-item/Cart-item.scss'

//Import Currency Svg from react-icons 📝
import { BiEuro as Euro } from 'react-icons/bi'

export const CartItem = (props) => {
  const { id, title, img_path, genre, price } = props.data
  return (
    <div className='card' key={id}>
      <img
        className='card-img'
        src={require(`../../assets/designs/teeshirts/${img_path}.jpg`)}
        alt='Card image'
      />
      <div className='info-container'>
        <h3 className='card-title'>{title}</h3>

        <div className='price-container'>
          <p className='lowered-price'></p>
          <p className='actual-price'>
            {price}
            <Euro />
          </p>
        </div>
      </div>
    </div>
  )
}
