import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../utils/products'

export const ShopContext = createContext(null)

const getDefaultcart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0
  }
  return cart
}
export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultcart())
  const [itemInCart, setItemInCart] = useState(false)

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    setItemInCart(true)
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const contextValue = { itemInCart, setItemInCart, cartItems, addToCart, removeFromCart }

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
