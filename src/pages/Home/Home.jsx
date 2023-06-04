import '../../styles/pagestyles/Home/Home.scss'

import { About } from '../../components/About/About'

import { Carousel } from '../../components/Carousel/Carousel'
import { Bestsellers } from '../../components/Bestsellers/Bestsellers'
import { FAQ } from '../../components/FAQ/FAQ'
import { Contact } from '../../components/Contact/Contact'
import { Footer } from '../../components/Footer/Footer'
import { Products } from '../../components/Products/Products'
import Decor from '../../components/Decor - Slogen/Decor'

export const Home = () => {
  return (
    <div className='home-wrapper'>
      <Decor />
      <Carousel />
      <About />
      <Products />
      <Bestsellers />
      <FAQ />
      <Contact />
      <Decor />
      <Footer />
    </div>
  )
}
