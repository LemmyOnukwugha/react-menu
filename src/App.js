import React, { createContext, useEffect } from "react"

import NavBar from "./components/NavBar/NavBar"
import Menu from "./components/Menu/Menu"
import "./app.css"
import { useState } from "react"
import Modal from "./components/Modal/Modal"

// first step is to create a context
export const cartContext = createContext()

function App() {
  const [cart, setCart] = useState([])
  const [showModal, setShowModal] = useState(false)
  const value = {
    cart: cart,
    setCart: setCart,
  }

  return (
    <div>
      {/* secound step is to wrap the components which should have access to the state */}
      <cartContext.Provider value={value}>
        <NavBar onHandleModal={setShowModal} />
        <Menu />
        {showModal ? <Modal /> : null}
      </cartContext.Provider>
    </div>
  )
}

export default App
