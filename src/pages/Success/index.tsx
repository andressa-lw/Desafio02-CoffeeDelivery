import { OrderDetails, SuccessContainer } from "./styles"

import ImgSuccess from "../../assets/img-success.svg"
import { MapPin } from "@phosphor-icons/react"
import { useLocation, useNavigate } from "react-router-dom"
import { OrderData } from "../Checkout"
import { paymentMethods } from "../Checkout/components/PaymentOption"
import { useEffect } from "react"

interface LocationType {
  state: OrderData
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate("/")
    }
  }, [])

  if (!state) return <></>

  return (
    <SuccessContainer>
      <div className="container">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <OrderDetails>
          <ul>
            <li>
              <span className="icon">
                <MapPin size={16} weight="fill" />
              </span>
              <span>
                Entrega em
                <strong>
                  {state.rua}, {state.numero}, {state.complemento}
                  <br />
                  {state.bairro} - {state.cidade}, {state.uf}
                </strong>
              </span>
            </li>
            <li>
              <span className="icon">
                <MapPin size={16} weight="fill" />
              </span>
              <span>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </span>
            </li>
            <li>
              <span className="icon">
                <MapPin size={16} weight="fill" />
              </span>
              <span>
                Pagamento na entrega
                <br />{" "}
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </span>
            </li>
          </ul>
          <img src={ImgSuccess} alt="Homem dirigindo a moto" />
        </OrderDetails>
      </div>
    </SuccessContainer>
  )
}
