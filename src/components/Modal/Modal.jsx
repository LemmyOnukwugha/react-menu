import React, { useContext, useState } from "react"
import styles from "./modal.module.css"
import Cart from "../Cart/Cart"
import { cartContext } from "../../App"

const Modal = () => {
  const value = useContext(cartContext)
  return (
    <div className={styles.background}>
      <Cart cartItems={value.cart} />
    </div>
  )
}

export default Modal
