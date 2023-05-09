import '../../styles/Carousel/Carousel.scss'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { GoPrimitiveDot } from 'react-icons/go'
import { useState, useEffect } from 'react'

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dotIndex, setDotIndex] = useState(0)

  const path = [
    'carousel-images/carousel-1.jpg',
    'carousel-images/carousel-2.jpg',
    'carousel-images/carousel-3.jpg',
    'carousel-images/carousel-4.jpg',
  ]

  useEffect(() => {
    const addFirst = () => {
      let dotsContainer = document.querySelector('.dots-container')
      dotsContainer.childNodes[dotIndex].classList.add('actual-dot')
    }
    addFirst()
  }, [])

  // setInterval(() => {
  //   Next() //call the function
  // }, 5000)

  const Next = () => {
    let dotsContainer = document.querySelector('.dots-container')
    currentIndex >= 3 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
    dotIndex >= 3 ? setDotIndex(0) : setDotIndex(dotIndex + 1)

    const removePrev = () => {
      dotsContainer.childNodes[dotIndex - 1].classList.remove('actual-dot')
      dotsContainer.childNodes[dotIndex].classList.add('actual-dot')
    }

    const removeLast = () => {
      dotsContainer.childNodes[dotIndex].classList.remove('actual-dot')
      setDotIndex(0)
    }

    const add = () => {
      dotsContainer.childNodes[dotIndex].classList.add('actual-dot')
      setDotIndex(dotIndex + 1)
    }

    dotIndex >= 1 ? removePrev() : add()

    dotIndex < 3 ? add() : removeLast()

    dotIndex === 3
      ? dotsContainer.childNodes[dotIndex].classList.add('actual-dot')
      : dotsContainer.childNodes[3].classList.remove('actual-dot')
  }

  const Prev = () => {
    let dotsContainer = document.querySelector('.dots-container')
    currentIndex <= 0 ? setCurrentIndex(3) : setCurrentIndex(currentIndex - 1)
    dotIndex <= 0 ? setDotIndex(3) : setDotIndex(dotIndex - 1)

    const removePrev = () => {
      dotsContainer.childNodes[dotIndex - 1].classList.remove('actual-dot')
      dotsContainer.childNodes[dotIndex].classList.add('actual-dot')
    }

    const removeLast = () => {
      dotsContainer.childNodes[dotIndex].classList.remove('actual-dot')
      setDotIndex(0)
    }

    const add = () => {
      dotsContainer.childNodes[dotIndex].classList.add('actual-dot')
      setDotIndex(dotIndex + 1)
    }

    dotIndex >= 1 ? removePrev() : add()

    dotIndex < 3 ? add() : removeLast()

    dotIndex === 3
      ? dotsContainer.childNodes[dotIndex].classList.add('actual-dot')
      : dotsContainer.childNodes[3].classList.remove('actual-dot')
  }

  return (
    <div className='carousel-wrapper'>
      <div className='carousel-container'>
        <div className='image-container'>
          <img className='img' src={require(`../../assets/${path[currentIndex]}`)} alt='' />
        </div>

        <div className='prev-container' onClick={Prev}>
          <IoIosArrowBack className='back-arrow' />
        </div>

        <div className='next-container' onClick={Next}>
          <IoIosArrowForward className='forward-arrow' />
        </div>
      </div>

      <div className='dots-container'>
        <GoPrimitiveDot className='dot' />
        <GoPrimitiveDot className='dot' />
        <GoPrimitiveDot className='dot' />
        <GoPrimitiveDot className='dot' />
      </div>
    </div>
  )
}
