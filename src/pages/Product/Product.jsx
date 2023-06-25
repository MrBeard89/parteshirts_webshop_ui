import React, { useContext } from 'react'
import '../../styles/pagestyles/Product/Product.scss'
import { ShopContext } from '../../context/shop-context'
import { Footer } from '../../components/Footer/Footer'

export const Product = () => {
  const { actualProductState } = useContext(ShopContext)

  const productStyle = {
    wrapper: {
      fontFamily: "'Noto Sans', sans-serif",
      width: '100%',
      height: '100vh',
      backgroundColor: 'white',
      paddingTop: '8rem',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    img: {
      width: '100%',
    },
    title: {
      lineHeight: '35px',
      textAlign: 'center',
      width: '100%',
      fontSize: '34px',
      paddingBottom: '1rem',
    },
    description: {
      width: '90%',
      textAlign: 'left',
    },
  }
  return (
    <>
      {actualProductState.map((product) => {
        return (
          <div style={productStyle.wrapper} className='product-wrapper' key={product.id}>
            <div className='product-card' style={productStyle.card}>
              {product.type === 'teeshirts' || 'hoodies' ? (
                <img
                  style={productStyle.img}
                  className='product-card-img'
                  src={require(`../../assets/designs/${product.type}/${product.img_path}.jpg`)}
                  alt='Card image'
                />
              ) : (
                <img
                  style={productStyle.img}
                  className='product-card-img'
                  src={require(`../../assets/designs/${product.img_path}.jpg`)}
                  alt='Card image'
                />
              )}

              <h1 className='product-title' style={productStyle.title}>
                {product.title}
              </h1>
              <p className='product-description' style={productStyle.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolor magni impedit
                quidem aut, iusto laborum fugiat ipsum doloremque esse, aspernatur eum tenetur error
                placeat.
              </p>
            </div>
          </div>
        )
      })}
      <Footer />
    </>
  )
}
