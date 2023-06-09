import '../../styles/componentstyles/Home/Contact/Contact.scss'

export const Contact = () => {
  return (
    <div className='contact-wrapper' id='contact'>
      {/*  Main container */}

      <div className='contact-container'>
        {/* Main title */}

        <h1 className='contact-title'>Contact us</h1>

        {/*Contact Outro text */}

        <p className='contact-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, perspiciatis! Tempora
          commodi aut veritatis fugiat omnis incidunt aliquam, eos dolores.{' '}
        </p>

        {/* Main form container */}

        <div className='contact-form-container'>
          {/* Actual form */}
          {/* Validation is done by pure html :valid,:invalid,:required,and :focus pseudo classes via css/html*/}

          <form className='contact-form' action='#' method='#'>
            {/* Each div is a form field */}

            <div className='contact-form-field'>
              {/* Label for Name */}
              <label className='contact-form-label' htmlFor='name'>
                Name
              </label>

              {/* Input - Name */}

              <input
                className='contact-form-input'
                type='text'
                name='name'
                placeholder='Please write your name'
                pattern='^[a-zA-ZÀ-ÖØ-öø-ÿ ]+$'
                required
              />
              <span className='en'></span>
            </div>

            <div className='contact-form-field'>
              {/* Label for Email */}

              <label className='contact-form-label' htmlFor='email'>
                Email
              </label>

              {/* Input - Email */}

              <input
                className='contact-form-email'
                type='email'
                name='email'
                placeholder='Please write an Email'
                required
                minLength='1'
              />
              <span className='en'></span>
            </div>

            <div className='contact-form-field'>
              {/* Label for Message */}

              <label className='contact-form-label' htmlFor='message'>
                Message
              </label>

              {/* Textarea */}

              <textarea
                className='contact-form-textarea'
                cols='30'
                rows='10'
                type='text'
                name='message'
                placeholder='Please write a Message'
                required
                autoComplete='none'
                minLength='10'
              />
              <span className='en'></span>
            </div>

            {/* Submit button - no action,no method , just snaps at top of the page */}

            <div className='submit-btn-container'>
              <button className='btn-submit' type='submit'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
