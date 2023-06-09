import { useState } from 'react'
import '../../styles/componentstyles/Home/FAQ/FAQ.scss'

export const FAQ = () => {
  const [showAnswerFirst, setshowAnswerFirst] = useState(false)
  const [showAnswerSecond, setshowAnswerSecond] = useState(false)
  const [showAnswerThird, setshowAnswerThird] = useState(false)
  const [showAnswerFourth, setshowAnswerFourth] = useState(false)

  return (
    <div className='faq-wrapper' id='faq'>
      <div className='faq-container'>
        <div className='faq-title-bar'>
          <h1 className='title-bar'>Frequently asked questions</h1>
        </div>

        <div className='questions-container'>
          <div className='question' onClick={() => setshowAnswerFirst((prev) => !prev)}>
            <h2 className={`question-title ${showAnswerFirst ? 'current' : ''}`}>
              How much is the shipping fee?
            </h2>
            <p className={`${showAnswerFirst ? 'show' : 'answer'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorem nihil
              alias minima corrupti accusantium suscipit beatae, deserunt molestias, quis ex
              excepturi sapiente tenetur consequuntur?
            </p>
          </div>

          <div className='question' onClick={() => setshowAnswerSecond((prev) => !prev)}>
            <h2 className={`question-title ${showAnswerSecond ? 'current' : ''}`}>
              What size do i need?
            </h2>
            <p className={`${showAnswerSecond ? 'show' : 'answer'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorem nihil
              alias minima corrupti accusantium suscipit beatae, deserunt molestias, quis ex
              excepturi sapiente tenetur consequuntur?
            </p>
          </div>

          <div className='question' onClick={() => setshowAnswerThird((prev) => !prev)}>
            <h2 className={`question-title ${showAnswerThird ? 'current' : ''}`}>
              How long does it take to get my order?
            </h2>
            <p className={`${showAnswerThird ? 'show' : 'answer'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorem nihil
              alias minima corrupti accusantium suscipit beatae, deserunt molestias, quis ex
              excepturi sapiente tenetur consequuntur?
            </p>
          </div>

          <div className='question' onClick={() => setshowAnswerFourth((prev) => !prev)}>
            <h2 className={`question-title ${showAnswerFourth ? 'current' : ''}`}>
              Can i return my order if i am not satisfied?
            </h2>
            <p className={`${showAnswerFourth ? 'show' : 'answer'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, dolorem nihil
              alias minima corrupti accusantium suscipit beatae, deserunt molestias, quis ex
              excepturi sapiente tenetur consequuntur?
            </p>
          </div>

          <div className='Btnmore-container'>
            <button>more...</button>
          </div>
        </div>
      </div>
    </div>
  )
}
