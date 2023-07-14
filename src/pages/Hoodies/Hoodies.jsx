//Import Scss file
import '../../styles/pagestyles/Hoodies/Hoodies.scss'

//Import Currency Svg from react-icons 📝
import { BiEuro as Euro } from 'react-icons/bi'

//Import fixed components (Footer)
import { Footer } from '../../components/Footer/Footer'
import { Decor } from '../../components/Decor - Slogen/Decor'

//Import React Select
import Select from 'react-select'

//Usestate
import { useContext, useState } from 'react'

//ShopContext
import { ShopContext } from '../../context/shop-context'

import { BsCartPlus } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Hoodies = () => {
  const [selectedHoodies, setSelectedHoodies] = useState('')
  const { addToCart, cartItems, goToProduct, PRODUCTS } = useContext(ShopContext)

  //Select input Options 📀
  const hoodiesOptions = [
    { value: 'Man', label: 'Man' },
    { value: 'Woman', label: 'Woman' },
  ]

  //Custom styles for Select ✨
  const customStylesHoodies = {
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
  const handleChangeHoodies = (selectedOption) => {
    setSelectedHoodies(selectedOption.value)
  }

  //If selected contains the selected value , return the filtered array 😃
  let filtered
  filtered = selectedHoodies
    ? PRODUCTS.filter(
        (hoodie) => hoodie.genre.includes(selectedHoodies) && hoodie.type === 'hoodies'
      )
    : PRODUCTS.filter((hoodie) => hoodie.type === 'hoodies')

  //FilteredTeeshirts Component 🍕
  const FilteredHoodies = () =>
    filtered.map((hoodie) => {
      const cartItemAmount = cartItems[hoodie.product_id]
      return (
        <div className='hoodies-card' key={hoodie.product_id}>
          <Link to='/actual-product'>
            <h3
              className='hoodies-card-title'
              onClick={() => {
                goToProduct(hoodie.product_id)
              }}
            >
              {hoodie.title}
            </h3>
          </Link>

          <Link to='/actual-product'>
            <img
              className='hoodies-card-img'
              src={require(`../../assets/designs/hoodies/${hoodie.img_path}.jpg`)}
              alt='Card image'
              onClick={() => {
                goToProduct(hoodie.product_id)
              }}
            />
          </Link>

          <div className='hoodies-price-container'>
            <p className='hoodies-lowered-price'></p>
            <p className='hoodies-actual-price'>
              {hoodie.price}
              <Euro />
            </p>
          </div>

          <div className='addcart-countainer'>
            <BsCartPlus
              className='addcart'
              onClick={() => addToCart(hoodie.product_id)}
            ></BsCartPlus>
            {cartItemAmount > 0 ? (
              <span className='addcart-counter'>{cartItemAmount > 0 && <>{cartItemAmount}</>}</span>
            ) : (
              ''
            )}
          </div>
        </div>
      )
    })

  return (
    <>
      {/* Main wrapper */}
      <div className='hoodies-wrapper'>
        {/* Title */}
        <h1 className='hoodies-title'>Hoodies</h1>
        {/* Decor line below title */}
        <div className='hoodies-decor-line'></div>
        {/* Select input */}
        <Select
          autoFocus={true}
          className='filter-input-genre'
          placeholder='Filter By Genre'
          options={hoodiesOptions}
          onChange={handleChangeHoodies}
          styles={customStylesHoodies}
        />

        <div className='hoodies-container'>
          {/* Returned array */}
          <FilteredHoodies />
        </div>
      </div>
      {/* Footer component */}
      <Decor />
      <Footer />
    </>
  )
}
