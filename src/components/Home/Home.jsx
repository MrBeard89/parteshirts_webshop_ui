import '../../styles/Home/Home.scss'
import { AllProductsBtn } from '../All Products/AllProductsBtn'

import { Carousel } from '../Carousel/Carousel'

export const Home = () => {
  return (
    <div className='home-wrapper'>
      <Carousel />
      <AllProductsBtn />
    </div>
  )
}
