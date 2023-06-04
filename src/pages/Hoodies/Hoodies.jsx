//Import products json file 🎈
import Products from '../../utils/products.json'

//Import Scss file
import '../../styles/Products/Teeshirts/Teeshirts.scss'

//Import Currency Svg from react-icons 📝
import { BiEuro as Euro } from 'react-icons/bi'

//Import fixed components (Footer)
import { Footer } from '../../components/Footer/Footer'

//Import React Select
import Select from 'react-select'

//Usestate
import { useState } from 'react'

export const Hoodies = () => {
  const [selectedHoodies, setSelectedHoodies] = useState('')

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
    ? Products.hoodies.filter((hoodie) => hoodie.genre.includes(selectedHoodies))
    : Products.hoodies

  //FilteredTeeshirts Component 🍕
  const FilteredHoodies = () =>
    filtered.map((hoodie) => {
      return (
        <div className='teeshirts-card' key={hoodie.id}>
          <h3 className='teeshirts-card-title'>{hoodie.title}</h3>
          <img
            className='teeshirts-card-img'
            src={require(`../../assets/designs/${hoodie.img_path}.jpg`)}
            alt='Card image'
          />
          <div className='teeshirts-price-container'>
            <p className='teeshirts-lowered-price'></p>
            <p className='teeshirts-actual-price'>
              {hoodie.price}
              <Euro />
            </p>
          </div>
        </div>
      )
    })

  return (
    <>
      {/* Main wrapper */}
      <div className='teeshirts-wrapper'>
        {/* Title */}
        <h1 className='teeshirts-title'>Hoodies</h1>
        {/* Decor line below title */}
        <div className='teeshirts-decor-line'></div>
        {/* Select input */}
        <Select
          autoFocus={true}
          className='filter-input-genre'
          placeholder='Filter By Genre'
          options={hoodiesOptions}
          onChange={handleChangeHoodies}
          styles={customStylesHoodies}
        />

        <div className='teeshirts-container'>
          {/* Returned array */}
          <FilteredHoodies />
        </div>
      </div>
      {/* Footer component */}
      <Footer />
    </>
  )
}
