import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react"
import { CheckoutContainer } from "./styles"
import { AddressForm } from "./components/AddressForm"
import { PaymentOption } from "./components/PaymentOption"
import { CartOrder } from "./components/CartOrder"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../hooks/useCart"

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  rua: zod.string().min(1, "Informe o Rua"),
  numero: zod.string().min(1, "Informe o Número"),
  complemento: zod.string(),
  bairro: zod.string().min(1, "Informe o Bairro"),
  cidade: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" }
    },
  }),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export function Checkout() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/success", {
      state: data,
    })
    cleanCart()
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <div className="container">
          <div className="order">
            <h2>Complete seu pedido</h2>
            <div className="box address">
              <div className="top">
                <MapPinLine size={22} />
                <div>
                  <strong>Endereço de Entrega</strong>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </div>
              <AddressForm />
            </div>
            <div className="box payment">
              <div className="top">
                <CurrencyDollar size={22} />
                <div>
                  <strong>Pagamento</strong>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </div>
              <PaymentOption />
            </div>
          </div>
          <div className="checkout">
            <h2>Cafés selecionados</h2>
            <div className="box cartTotal">
              <CartOrder />
            </div>
          </div>
        </div>
      </CheckoutContainer>
    </FormProvider>
  )
}
