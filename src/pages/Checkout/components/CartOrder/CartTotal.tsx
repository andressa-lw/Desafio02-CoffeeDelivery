import { useCart } from "../../../../hooks/useCart"
import { formatPrice } from "../../../../utils/formatPrice"
import { CartTotalContainer } from "./styles"

const DELIVERY_PRICE = 3.5

export function CartTotal() {
  const { cartItemsTotal, cartQuantity } = useCart()
  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemsTotal = formatPrice(cartItemsTotal)
  const formattedCartTotal = formatPrice(cartTotal)
  const formattedDeliveryPrice = formatPrice(DELIVERY_PRICE)

  return (
    <CartTotalContainer>
      <div>
        <p>Total de itens</p>
        <small>R$ {formattedItemsTotal}</small>
      </div>
      <div>
        <p>Entrega</p>
        <small>R$ {formattedDeliveryPrice}</small>
      </div>
      <div className="total">
        <p>Total</p>
        <small>R$ {formattedCartTotal}</small>
      </div>

      <button disabled={cartQuantity <= 0} type="submit">
        confirmar pedido
      </button>
    </CartTotalContainer>
  )
}
