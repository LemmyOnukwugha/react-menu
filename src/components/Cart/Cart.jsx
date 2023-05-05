import React from "react"
import { Card, Container } from "react-bootstrap"
import CartItem from "../CartItem/CartItem"

const Cart = ({ cartItems }) => {
  console.log(cartItems)
  return (
    <Container fluid="sm" style={{ maxWidth: 600, marginTop: 40 }}>
      <Card className="p-2">
        <ul>
          {cartItems.map((item, index) => {
            return (
              <CartItem
                key={index}
                food={item.food}
                description={item.description}
                price={item.price}
                count={item.count}
              />
            )
          })}
        </ul>
      </Card>
    </Container>
  )
}

export default Cart
