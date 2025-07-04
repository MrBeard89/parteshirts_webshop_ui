import '../../styles/componentstyles/Home/Products/Products.scss'

//Import Link from router
import { Link } from 'react-router-dom'

//Import images for Thumbnails
import Teeshirts from '../../assets/designs/teeshirts/connection/connection main pic.webp'
import Hoodies from '../../assets/designs/hoodies/don_t panic it_s legal/don_t panic it_s legal man hoodie.webp'
import Parteebag from '../../assets/designs/accessories/partee bag/partee bag.webp'
import Parteefan from '../../assets/designs/accessories/partee fan/partee fan.webp'
import MusicPeace from '../../assets/designs/teeshirts/music and peace/music and peace main pic.webp'

export const Products = () => {
  return (
    <div className='products-wrapper'>
      <Link to='/teeshirts'>
        <div className='shirts-container'>
          <img className='shirts-thumbnail' src={Teeshirts} alt='Connection shirts thumbnail' />
          <button>Tee shirts</button>
        </div>
      </Link>

      <Link to='/hoodies'>
        <div className='hoodies_container'>
          <img className='hoodies-thumbnail' src={Hoodies} alt="Don't panic hoodies thumbnail" />
          <button>Hoodies</button>
        </div>
      </Link>

      <Link to='/accessories'>
        <div className='accessories_container'>
          <div className='accessories-img-container'>
            <img className='accessories-thumbnail' src={Parteebag} alt='Parteebag thumbnail' />
            <img className='accessories-thumbnail' src={Parteefan} alt='Parteefan thumbnail' />
          </div>

          <button>Accessories</button>
        </div>
      </Link>

      <div className='party-package-container'>
        <div className='party-packge-img-container'>
          <div className='inner-img-container'>
            <img className='party-package-thumbnail' src={Parteebag} alt='Parteebag thumbnail' />
            <img className='party-package-thumbnail' src={Parteefan} alt='Parteefan thumbnail' />
          </div>

          <img
            className='music-and-peace-thumbnail'
            src={MusicPeace}
            alt='Music and Peace thumbnail'
          />
        </div>

        <button>Partee package</button>
      </div>
    </div>
  )
}
