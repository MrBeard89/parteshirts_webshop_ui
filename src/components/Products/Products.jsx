import '../../styles/Products/Products.scss'

//Import images for Thumbnails
import Teeshirts from '../../assets/designs/connection/connection main pic.jpg'
import Hoodies from '../../assets/designs/don_t panic it_s legal/don_t panic it_s legal man hoodie.jpg'
import Parteebag from '../../assets/designs/partee bag/partee bag.jpg'
import Parteefan from '../../assets/designs/partee fan/partee fan.jpg'
import MusicPeace from '../../assets/designs/music and peace/music and peace main pic.jpg'

export const Products = () => {
  return (
    <div className='products-wrapper'>
      <div className='shirts-container'>
        <img className='shirts-thumbnail' src={Teeshirts} alt='Connection shirts thumbnail' />
        <button>Tee shirts</button>
      </div>

      <div className='hoodies-container'>
        <img className='hoodies-thumbnail' src={Hoodies} alt="Don't panic hoodies thumbnail" />
        <button>Hoodies</button>
      </div>

      <div className='accessories-container'>
        <div className='accessories-img-container'>
          <img className='accessories-thumbnail' src={Parteebag} alt='Parteebag thumbnail' />
          <img className='accessories-thumbnail' src={Parteefan} alt='Parteefan thumbnail' />
        </div>

        <button>Accessories</button>
      </div>

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
