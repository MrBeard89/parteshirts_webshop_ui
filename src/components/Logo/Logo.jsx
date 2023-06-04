import Sitelogo from '../../assets/logo/parteeshirts.jpg'

import '../../styles/componentstyles/Home/Logo/Logo.scss'

export const Logo = () => {
  return (
    <div className='logo-container'>
      <img src={Sitelogo} alt='Logo of Parteeshirts' />
    </div>
  )
}
