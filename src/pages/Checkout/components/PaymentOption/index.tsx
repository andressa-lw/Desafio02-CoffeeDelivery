import { Bank, CreditCard, Money } from "@phosphor-icons/react"
import { PaymentInput } from "./PaymentInput"
import { PaymentContainer } from "./styles"
import { useFormContext } from "react-hook-form"

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
}

export function PaymentOption() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
        <PaymentInput
          key={label}
          id={key}
          icon={icon}
          label={label}
          value={key}
          {...register("paymentMethod")}
        />
      ))}

      {paymentMethodError && <p>{paymentMethodError}</p>}
    </PaymentContainer>
  )
}
