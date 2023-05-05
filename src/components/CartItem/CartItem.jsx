import React, { useState } from "react"
import { Col, Form, Row, Button } from "react-bootstrap"

const CartItem = (props) => {
  const [count, setCount] = useState(0)
  console.log(props)

  const handleChange = (e) => {
    setCount(e.target.value)
  }
  return (
    <li>
      <Row style={{ borderBottom: "1px solid #ccc", paddingBlock: 10 }}>
        <Col className="d-flex justify-content-center flex-column">
          <h5>{props.food}</h5>
          <p>{props.description}</p>
        </Col>
        <Col className="d-flex flex-column align-items-end">
          <h5>${props.price}</h5>
          <p>count: {props.count}</p>
          <Button variant="danger">remove</Button>
        </Col>
      </Row>
    </li>
  )
}

export default CartItem
