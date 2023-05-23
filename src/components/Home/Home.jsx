import '../../styles/Home/Home.scss'

import { About } from '../About/About'
import { AllProductsBtn } from '../All Products Btn/AllProductsBtn'
import { Carousel } from '../Carousel/Carousel'
import { Bestsellers } from '../Bestsellers/Bestsellers'
import { FAQ } from '../FAQ/FAQ'
import { Contact } from '../Contact/Contact'
import { Footer } from '../Footer/Footer'
import { Products } from '../Products/Products'

export const Home = () => {
  return (
    <div className='home-wrapper'>
      <Carousel />
      <AllProductsBtn />
      <About />
      <Products />
      <Bestsellers />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
