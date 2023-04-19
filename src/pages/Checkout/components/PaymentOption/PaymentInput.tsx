import { ContentContainer, PaymentInputBox } from "./styles"
import { InputHTMLAttributes, ReactNode, forwardRef } from "react"

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentInputBox>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentInputBox>
  )
})
