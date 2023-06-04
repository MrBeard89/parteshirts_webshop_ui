//Import products json file 🎈
import Products from '../../utils/products.json'

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
import { useState } from 'react'

export const Accessories = () => {
  const [selectedAccessories, setSelectedAccessories] = useState('')

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
    ? Products.accessories.filter((accessorie) => accessorie.type.includes(selectedAccessories))
    : Products.accessories

  //FilteredTeeshirts Component 🍕
  const FilteredAccessories = () =>
    filtered.map((accessorie) => {
      return (
        <div className='accessories-card' key={accessorie.id}>
          <h3 className='accessories-card-title'>{accessorie.title}</h3>
          <img
            className='accessories-card-img'
            src={require(`../../assets/designs/${accessorie.img_path}.jpg`)}
            alt='Card image'
          />
          <div className='accessories-price-container'>
            <p className='accessories-lowered-price'></p>
            <p className='accessories-actual-price'>
              {accessorie.price}
              <Euro />
            </p>
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
