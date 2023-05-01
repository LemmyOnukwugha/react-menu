import React, { useEffect } from "react"

import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import "./app.css"
import { useState } from "react"
import { Button } from "react-bootstrap"

function App() {
  const [name, setName] = useState("iodsndosndomdk")

  const [cart, setCart] = useState([])
  console.log(cart)

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("submitting")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {/* <NavBar cart={cart} />

      <Menu addToCart={addToCart} /> */}
    </div>
  )
}

export default App
