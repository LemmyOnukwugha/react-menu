import React, { useEffect, useRef } from "react"

import NavBar from "./components/NavBar"
import Menu from "./components/Menu"
import "./app.css"
import { useState } from "react"
import { Button } from "react-bootstrap"

function App() {
  const [name, setName] = useState("iodsndosndomdk")
  const InputRef = useRef()

  const [cart, setCart] = useState([])

  useEffect(() => {
    console.log(InputRef.current)
  }, [])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setName(InputRef.current.value)
    console.log("submitting")
  }

  return (
    <div>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={InputRef} />
        <button type="submit">Submit</button>
      </form>
      {/* <NavBar cart={cart} />

      <Menu addToCart={addToCart} /> */}
    </div>
  )
}

export default App
