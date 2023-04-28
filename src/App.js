import React, { useEffect } from "react"

import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import "./app.css"

function App() {
  const cart = []

  const addToCart = (item) => {
    console.log(item)
    cart.push(item)
    console.log(cart)
  }
  return (
    <div>
      <NavBar cart={cart} />
      <Menu addToCart={addToCart} />
    </div>
  )
}

export default App
