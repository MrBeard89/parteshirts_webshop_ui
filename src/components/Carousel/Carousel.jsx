import '../../styles/componentstyles/Home/Carousel/Carousel.scss'
import images from '../../utils/sliderpath.json'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { GoPrimitiveDot } from 'react-icons/go'
import { useState, useEffect } from 'react'

export const Carousel = () => {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  let timeOut = null

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight()
      }, 2500)
  })

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }

  return (
    <div className='carousel_wrapper'>
      <div className='carousel'>
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={index == current ? 'carousel_card carousel_card-active' : 'carousel_card'}
            >
              <img
                className='card_image'
                src={require(`../../assets/${image.image}`)}
                alt='carousel-background-img'
                onMouseEnter={() => {
                  setAutoPlay(false)
                  clearTimeout(timeOut)
                }}
                onMouseLeave={() => {
                  setAutoPlay(true)
                }}
              />
            </div>
          )
        })}

        <div className='carousel_arrow_left' onClick={slideLeft}>
          <IoIosArrowBack />
        </div>

        <div className='carousel_arrow_right' onClick={slideRight}>
          <IoIosArrowForward />
        </div>

        <div className='carousel_pagination'>
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index == current ? 'pagination_dot pagination_dot-active' : 'pagination_dot'
                }
                onClick={() => setCurrent(index)}
              ></div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
