import { Trash } from "@phosphor-icons/react"
import { QuantityInput } from "../../../../components/QuantityInput"
import { ButtonsActionsContainer, CartCardCoffeeContainer } from "./styles"
import { CartItem } from "../../../../contexts/CartContext"
import { formatPrice } from "../../../../utils/formatPrice"
import { useCart } from "../../../../hooks/useCart"

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CartCardCoffee({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()
  const coffeeTotal = coffee.price * coffee.quantity
  const formattedPrice = formatPrice(coffeeTotal)

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase")
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease")
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  return (
    <CartCardCoffeeContainer>
      <div className="item">
        <img src={coffee.photo} alt={coffee.name} />
        <div>
          <h3>{coffee.name}</h3>
          <ButtonsActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <button className="remove" onClick={handleRemove}>
              <Trash size={16} />
              Remover
            </button>
          </ButtonsActionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CartCardCoffeeContainer>
  )
}
