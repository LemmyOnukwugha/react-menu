import React from "react"
import { Col, Form, Row, Button } from "react-bootstrap"

const CartItem = () => {
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

export default CartItem
