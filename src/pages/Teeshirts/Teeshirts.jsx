//Import products js file 🎈
import { PRODUCTS } from '../../utils/products'

//Import Scss file
import '../../styles/pagestyles/Teeshirts/Teeshirts.scss'

//Import Currency Svg from react-icons 📝
import { BiEuro as Euro } from 'react-icons/bi'

//Import fixed components (Footer)
import { Footer } from '../../components/Footer/Footer'
import { Decor } from '../../components/Decor - Slogen/Decor'

//Import React Select
import Select from 'react-select'

//Usestate,context
import React, { useState, useContext } from 'react'

//ShopContext
import { ShopContext } from '../../context/shop-context'

import { BsCartPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Teeshirts = () => {
  const [selectedShirt, setSelectedShirt] = useState('')
  const { addToCart, cartItems, goToProduct } = useContext(ShopContext)

  //Select input Options 📀
  const shirtsOptions = [
    { value: 'Man', label: 'Man' },
    { value: 'Woman', label: 'Woman' },
  ]

  //Custom styles for Select ✨
  const customStylesShirts = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? '#000' : '#f5de5d',
      backgroundColor: state.isSelected ? '#f5de5d' : '#000',
      '&:hover': {
        backgroundColor: '#f5de5d',
        color: '#000',
        cursor: 'pointer',
      },
    }),
    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: '#000',
      padding: '5px',
      border: 'none',
      boxShadow: 'none',
      borderRadius: '8px',
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#d69811' }),
  }

  //Setting selected value to selected state
  const handleChangeShirts = (selectedOption) => {
    setSelectedShirt(selectedOption.value)
  }

  //If selected contains the selected value , return the filtered array 😃
  let filtered
  filtered = selectedShirt
    ? PRODUCTS.filter((shirt) => shirt.genre.includes(selectedShirt) && shirt.type === 'teeshirts')
    : PRODUCTS.filter((shirt) => shirt.type === 'teeshirts')

  //FilteredTeeshirts Component 🍕
  const FilteredTeeshirts = () => {
    return filtered.map((shirt) => {
      const cartItemAmount = cartItems[shirt.id]

      return (
        <div className='teeshirts-card' key={shirt.id}>
          <Link to='/actual-product'>
            <h3
              className='teeshirts-card-title'
              onClick={() => {
                goToProduct(shirt.id)
              }}
            >
              {shirt.title}
            </h3>
          </Link>

          <Link to='/actual-product'>
            <img
              className='teeshirts-card-img'
              src={require(`../../assets/designs/teeshirts/${shirt.img_path}.jpg`)}
              alt='Card image'
              onClick={() => {
                goToProduct(shirt.id)
              }}
            />
          </Link>
          <div className='teeshirts-price-container'>
            <p className='teeshirts-lowered-price'></p>
            <p className='teeshirts-actual-price'>
              {shirt.price}
              <Euro />
            </p>
          </div>

          <div className='addcart-countainer'>
            <BsCartPlus className='addcart' onClick={() => addToCart(shirt.id)}></BsCartPlus>
            {cartItemAmount > 0 ? (
              <span className='addcart-counter'>{cartItemAmount > 0 && <>{cartItemAmount}</>}</span>
            ) : (
              ''
            )}
          </div>
        </div>
      )
    })
  }

  return (
    <>
      {/* Main wrapper */}
      <div className='teeshirts-wrapper'>
        {/* Title */}
        <h1 className='teeshirts-title'>Teeshirts</h1>
        {/* Decor line below title */}
        <div className='teeshirts-decor-line'></div>
        {/* Select input */}
        <Select
          autoFocus={true}
          className='filter-input-genre'
          placeholder='Filter By Genre'
          options={shirtsOptions}
          onChange={handleChangeShirts}
          styles={customStylesShirts}
        />

        <div className='teeshirts-container'>
          {/* Returned array */}
          <FilteredTeeshirts />
        </div>
      </div>
      {/* Footer component */}
      <Decor />
      <Footer />
    </>
  )
}
