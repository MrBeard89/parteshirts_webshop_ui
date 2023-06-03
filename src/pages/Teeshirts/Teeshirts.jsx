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

export const Teeshirts = () => {
  const [selected, setSelected] = useState('')

  //Select input Options 📀
  const options = [
    { value: 'Man', label: 'Man' },
    { value: 'Woman', label: 'Woman' },
  ]

  //Custom styles for Select ✨
  const customStyles = {
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
      borderRadius: '1rem',
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: '#d69811' }),
  }

  //Setting selected value to selected state
  const handleChange = (selectedOption) => {
    setSelected(selectedOption.value)
  }

  //If selected contains the selected value , return the filtered array 😃
  const filtered = selected
    ? Products.teeshirts.filter((shirt) => shirt.genre.includes(selected))
    : Products.teeshirts

  //FilteredTeeshirts Component 🍕
  const FilteredTeeshirts = () =>
    filtered.map((shirt) => {
      return (
        <div className='teeshirts-card' key={shirt.id}>
          <h3 className='teeshirts-card-title'>{shirt.title}</h3>
          <img
            className='teeshirts-card-img'
            src={require(`../../assets/designs/${shirt.img_path}.jpg`)}
            alt='Card image'
          />
          <div className='teeshirts-price-container'>
            <p className='teeshirts-lowered-price'></p>
            <p className='teeshirts-actual-price'>
              {shirt.price}
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
        <h1 className='teeshirts-title'>Teeshirts</h1>
        {/* Decor line below title */}
        <div className='teeshirts-decor-line'></div>
        {/* Select input */}
        <Select
          autoFocus={true}
          className='filter-input'
          placeholder='Filter By'
          options={options}
          onChange={handleChange}
          styles={customStyles}
        />
        <div className='teeshirts-container'>
          {/* Returned array */}
          <FilteredTeeshirts />
        </div>
      </div>
      {/* Footer component */}
      <Footer />
    </>
  )
}
