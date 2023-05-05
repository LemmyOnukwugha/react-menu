import React from "react"
import { Card, Container } from "react-bootstrap"
import MenuItem from "../MenuItem/MenuItem"

function Menu() {
  const foodItem = [
    {
      food: "Vegetables",
      description: "Fresh green vegetables",
      price: 12.99,
    },
    {
      food: "Eba",
      description: "Hot and delicious food",
      price: 32.7,
    },
    {
      food: "Chicken",
      description: "Big and Heavy chicken",
      price: 22.99,
    },
    {
      food: "Onion",
      description: "Fresh new Onions",
      price: 5.89,
    },
    {
      food: "Pepper",
      description: "Red hot chilli pepper",
      price: 7.45,
    },
  ]
  return (
    <Container fluid="sm" style={{ maxWidth: 600, marginTop: 40 }}>
      <Card className="p-2">
        <ul>
          {foodItem.map((item, index) => {
            return (
              <MenuItem
                key={index}
                food={item.food}
                description={item.description}
                price={item.price}
              />
            )
          })}
        </ul>
      </Card>
    </Container>
  )
}

export default Menu
