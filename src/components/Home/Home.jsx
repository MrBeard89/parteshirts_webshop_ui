import '../../styles/Home/Home.scss'
import { About } from '../About/About'
import { AllProductsBtn } from '../All Products/AllProductsBtn'

import { Carousel } from '../Carousel/Carousel'
import { Shirts } from '../Products/T-shirts/Shirts'

export const Home = () => {
  return (
    <div className='home-wrapper'>
      <Carousel />
      <AllProductsBtn />
      <About />
      <Shirts />
    </div>
  )
}
