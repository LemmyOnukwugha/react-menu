import React, { useState } from "react"
import { Badge, Button, Col, Container, Row } from "react-bootstrap"

function NavBar(props) {
  const [count, setCount] = useState(props.cart.length)
  return (
    <div className="bg-info py-3">
      <Container>
        <Row>
          <Col>
            <h3>Food App</h3>
          </Col>
          <Col className="d-flex justify-content-end">
            <Button>
              Cart{" "}
              <Badge bg="light" text="dark">
                {count}
              </Badge>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default NavBar
