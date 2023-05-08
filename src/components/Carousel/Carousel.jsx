import '../../styles/Carousel/Carousel.scss'
import imageSrc from '../../utils/carousel-images.json'

export const Carousel = () => {
  return (
    <div className='carousel-wrapper'>
      <div className='carousel-container'>
        {imageSrc.map((data, index) => {
          return (
            <>
              <div className='image-container' key={index}>
                <img className='img' src={require(`../../assets/${data.src}`)} />
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
