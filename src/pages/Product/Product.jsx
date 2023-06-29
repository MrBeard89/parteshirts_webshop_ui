import React, { useContext } from 'react'

import { ShopContext } from '../../context/shop-context'
import { Footer } from '../../components/Footer/Footer'

export const Product = () => {
  const { actualProductState } = useContext(ShopContext)

  const productStyle = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: "'Noto Sans', sans-serif",
      width: '100%',
      backgroundColor: 'white',
      paddingTop: '11rem',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: 'fit content',
      width: '90%',
      paddingBottom: '3rem',
    },
    img: {
      width: '100%',
      maxWidth: '800px',
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
      textAlign: 'center',
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet minus inventore
                accusantium ad optio, esse autem pariatur suscipit, tempora similique eius fuga
                doloremque dolores harum repellat dolore, porro voluptatum deleniti illum. Pariatur
                illo repellat reiciendis obcaecati beatae delectus praesentium, asperiores tenetur
                dolores doloribus. Suscipit ducimus reprehenderit quasi ab animi!
              </p>
            </div>
          </div>
        )
      })}
      <Footer />
    </>
  )
}
