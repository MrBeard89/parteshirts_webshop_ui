import '../../styles/componentstyles/Home/Contact/Contact.scss'

import { RxDoubleArrowDown } from 'react-icons/rx'

export const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <div className='contact-container'>
        <div className='contact-title-bar'>
          <h1 className='title-bar'>Contact us</h1>
        </div>
        <div className='text-container'>
          <p className='contact-text'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque molestias quo nesciunt!
            Perferendis tenetur odit ea unde magni, consequuntur iusto inventore accusamus laborum
            molestias culpa. Repellat aspernatur obcaecati quisquam consectetur harum
            necessitatibus, odit suscipit perferendis voluptatum amet possimus pariatur itaque
            temporibus laudantium deserunt porro doloribus voluptate perspiciatis nemo animi
            accusantium!
          </p>
          <button>Send Email</button>
          <RxDoubleArrowDown className='down-arrow' />
        </div>

        <button className='reviews'>View Reviews</button>
      </div>
    </div>
  )
}
