import React from "react"
import { useState } from "react"
import { Button, Col, Form, Row } from "react-bootstrap"
import "./menuItem.css"

const MenuItem = (props) => {
  const [count, setCount] = useState(0)

  const handleChange = (e) => {
    setCount(e.target.value)
  }
  const handleAddTocart = (e) => {
    e.preventDefault()
    const CartItem = {
      food: props.food,
      description: props.description,
      price: props.price,
      count: count,
    }
    props.addToCart(CartItem)
  }
  return (
    <li>
      <Row>
        <Col lg={10} className="d-flex justify-content-center flex-column">
          <h5>{props.food}</h5>
          <p>{props.description}</p>
          <p>${props.price}</p>
        </Col>
        <Col>
          <Form onSubmit={handleAddTocart}>
            <Form.Group className="mb-2">
              <Form.Label htmlFor="">Amount</Form.Label>
              <Form.Control
                type="number"
                value={count}
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit">Add</Button>
          </Form>
        </Col>
      </Row>
    </li>
  )
}

export default MenuItem
