import { Minus, Plus } from "@phosphor-icons/react"
import { QuantityInputContainer } from "./styles"

interface QuantityInputProps {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <button disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} />
      </button>
      <input type="number" readOnly value={quantity} />
      <button onClick={onIncrease}>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  )
}
