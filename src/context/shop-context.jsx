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
  const [actualProductState, setActualProductState] = useState([])

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const removeAllFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - prev[itemId] }))
  }

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount
  }

  const getTotalItemCount = () => {
    let totalItemCount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItemCount += cartItems[item]
      }
    }
    return totalItemCount
  }

  const goToProduct = (itemId) => {
    let actualProduct = PRODUCTS.filter((product) => product.id === itemId)

    setActualProductState(actualProduct)
  }
  const contextValue = {
    getTotalItemCount,
    getTotalCartAmount,
    updateCartItemCount,
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    goToProduct,
    actualProductState,
  }

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
