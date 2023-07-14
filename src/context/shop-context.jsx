import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext({})

export const ShopContextProvider = (props) => {
  const PRODUCTS = props.PRODUCTS

  useEffect(() => {
    // Check if PRODUCTS array is defined and accessible
    if (typeof PRODUCTS !== 'undefined' && Array.isArray(PRODUCTS)) {
      setCartItems(getDefaultcart())
    } else {
      console.error('PRODUCTS array is not defined or is not an array.')
    }
  }, [PRODUCTS])

  //Usestates
  const [cartItems, setCartItems] = useState(getDefaultcart())
  const [actualProductState, setActualProductState] = useState([])

  //Iterate throw Products, and set each product a value of 0 - then populate cartItems
  function getDefaultcart() {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0
    }
    return cart
  }

  //Add to Cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  //Remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  //Remove all from Cart - when clicking Trash
  const removeAllFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - prev[itemId] }))
  }

  //Update cart item count
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
  }

  //get total amount
  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.product_id === Number(item))
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
    let actualProduct = PRODUCTS.filter((product) => product.product_id === itemId)

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
    PRODUCTS,
  }

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
