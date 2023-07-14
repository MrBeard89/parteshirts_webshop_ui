//Import Scss file
import '../../styles/pagestyles/Accessories/Accessories.scss'

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

export const Accessories = () => {
  const [selectedAccessories, setSelectedAccessories] = useState('')
  const { addToCart, cartItems, goToProduct, PRODUCTS } = useContext(ShopContext)
  //Select input Options 📀
  const accessoriesOptions = [
    { value: 'bag', label: 'Bag' },
    { value: 'fan', label: 'Fan' },
  ]

  //Custom styles for Select ✨
  const customStylesAccessories = {
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
  const handleChangeAccessories = (selectedOption) => {
    setSelectedAccessories(selectedOption.value)
  }

  //If selected contains the selected value , return the filtered array 😃
  let filtered
  filtered = selectedAccessories
    ? PRODUCTS.filter((accessorie) => accessorie.name === selectedAccessories)
    : PRODUCTS.filter((accessorie) => accessorie.type === 'accessories')

  //FilteredTeeshirts Component 🍕
  const FilteredAccessories = () =>
    filtered.map((accessorie) => {
      const cartItemAmount = cartItems[accessorie.product_id]
      return (
        <div className='accessories-card' key={accessorie.product_id}>
          <Link to='/actual-product'>
            <h3
              className='accessories-card-title'
              onClick={() => {
                goToProduct(accessorie.product_id)
              }}
            >
              {accessorie.title}
            </h3>
          </Link>

          <Link to='/actual-product'>
            <img
              className='accessories-card-img'
              src={require(`../../assets/designs/accessories/${accessorie.img_path}.jpg`)}
              alt='Card image'
              onClick={() => {
                goToProduct(accessorie.product_id)
              }}
            />
          </Link>

          <div className='accessories-price-container'>
            <p className='accessories-lowered-price'></p>
            <p className='accessories-actual-price'>
              {accessorie.price}
              <Euro />
            </p>
          </div>

          <div className='addcart-countainer'>
            <BsCartPlus
              className='addcart'
              onClick={() => addToCart(accessorie.product_id)}
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
      <div className='accessories-wrapper'>
        {/* Title */}
        <h1 className='accessories-title'>Accessories</h1>
        {/* Decor line below title */}
        <div className='accessories-decor-line'></div>
        {/* Select input */}
        <Select
          autoFocus={true}
          className='filter-input-genre'
          placeholder='Filter By Type'
          options={accessoriesOptions}
          onChange={handleChangeAccessories}
          styles={customStylesAccessories}
        />

        <div className='accessories-container'>
          {/* Returned array */}
          <FilteredAccessories />
        </div>
      </div>
      {/* Footer component */}
      <Decor />
      <Footer />
    </>
  )
}
