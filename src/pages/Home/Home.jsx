import '../../styles/Home/Home.scss'

import { About } from '../../components/About/About'

import { Carousel } from '../../components/Carousel/Carousel'
import { Bestsellers } from '../../components/Bestsellers/Bestsellers'
import { FAQ } from '../../components/FAQ/FAQ'
import { Contact } from '../../components/Contact/Contact'
import { Footer } from '../../components/Footer/Footer'
import { Products } from '../../components/Products/Products'

export const Home = () => {
  return (
    <div className='home-wrapper'>
      <Carousel />
      <About />
      <Products />
      <Bestsellers />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
