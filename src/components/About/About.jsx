import { useState } from 'react'
import '../../styles/componentstyles/Home/About/About.scss'

import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

export const About = () => {
  const [textReveal, setTextReveal] = useState(false)
  return (
    <div className='about-wrapper' id='about'>
      <section className='introduction-container'>
        <div className='title-bar' onClick={() => setTextReveal((prev) => !prev)}>
          <h1 className='introduction-title'>What is Parteeshirts?</h1>
          {textReveal ? (
            <IoIosArrowUp className='up-arrow' />
          ) : (
            <IoIosArrowDown className='down-arrow' />
          )}
        </div>

        <p className={`${textReveal ? 'show' : 'introduction-text'}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere reiciendis ipsum rem.
          Possimus voluptatem sit minima. Numquam vitae fuga a exercitationem deleniti. Eligendi
          nostrum, itaque rerum quia beatae quidem, quod tempora corporis earum repellat accusamus
          veritatis accusantium laboriosam doloribus laudantium enim praesentium alias et deserunt!
          Eligendi harum fugit vel error.
        </p>
      </section>
    </div>
  )
}
