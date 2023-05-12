import '../../styles/Bestsellers/Bestsellers.scss'
import BestsellerData from '../../utils/bestsellers.json'

import { BiEuro as Euro } from 'react-icons/bi'
import { TbCurrencyForint as Forint } from 'react-icons/tb'

export const Bestsellers = () => {
  return (
    <div className='bestsellers-wrapper'>
      <div className='bestsellers-container'>
        <h1 className='bestsellers-title'>Bestsellers gallery</h1>

        <div className='bestsellers-actual-wrapper'>
          {BestsellerData.map((data) => {
            return (
              <div className='bestsellers-actual' key={data.id}>
                <img className='actual-img' src={require(`../../assets/${data.img_src}`)} alt='' />
                <p className='actual-title'>{data.title}</p>

                <div className='price-container'>
                  <p className='actual-price'>{data.price}</p>
                  <p className='actual-currency'>
                    <Euro id='currency' />
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
