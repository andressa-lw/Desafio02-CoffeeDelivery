import { useCart } from "../../../../hooks/useCart"
import { CartCardCoffee } from "./CartCardCoffee"
import { CartTotal } from "./CartTotal"
import { CartOrderContainer } from "./styles"

export function CartOrder() {
  const { cartItems } = useCart()
  return (
    <CartOrderContainer>
      {cartItems.map((item) => (
        <CartCardCoffee key={item.id} coffee={item} />
      ))}

      <CartTotal />
    </CartOrderContainer>
  )
}
