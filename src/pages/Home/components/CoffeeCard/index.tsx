import { ShoppingCart } from "@phosphor-icons/react"

import { CoffeeCardContainer } from "./style"
import { formatPrice } from "../../../../utils/formatPrice"
import { QuantityInput } from "../../../../components/QuantityInput"
import { useCart } from "../../../../hooks/useCart"
import { useState } from "react"

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const formattedPrice = formatPrice(coffee.price)

  return (
    <CoffeeCardContainer>
      <img src={coffee.photo} alt={coffee.name} />
      <div className="tags">
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <div className="bottom">
        <span className="price">
          <small>R$</small> {formattedPrice}
        </span>
        <QuantityInput
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          quantity={quantity}
        />
        <button className="cart" onClick={handleAddToCart}>
          <ShoppingCart size={22} weight="fill" />
        </button>
      </div>
    </CoffeeCardContainer>
  )
}
