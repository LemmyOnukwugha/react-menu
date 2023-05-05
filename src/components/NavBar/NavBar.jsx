import React, { useContext } from "react"
import { Badge, Button, Col, Container, Row } from "react-bootstrap"
import { cartContext } from "../../App"

function NavBar({ onHandleModal }) {
  const value = useContext(cartContext) // []

  const handleClick = () => {
    onHandleModal(true)
  }
  return (
    <div className="bg-info py-3">
      <Container>
        <Row>
          <Col>
            <h3>Food App</h3>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button onClick={handleClick}>
              Cart{" "}
              <Badge bg="light" text="dark">
                {value.cart.length}
              </Badge>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NavBar
