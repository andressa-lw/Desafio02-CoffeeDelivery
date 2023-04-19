import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"

import imgBanner from "../../assets/img-coffee-banner.png"

import { coffees } from "../../data/coffees"
import { CoffeeCard } from "./components/CoffeeCard"

import { BannerContainer, CoffeeContainer } from "./styles"

export function Home() {
  return (
    <>
      <BannerContainer>
        <div className="container">
          <div className="texts">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <ul>
              <li>
                <span className="icon">
                  <ShoppingCart size={16} weight="fill" />
                </span>
                <span>Compra simples e segura</span>
              </li>
              <li>
                <span className="icon">
                  <Package size={16} weight="fill" />
                </span>
                <span>Entrega rápida e rastreada</span>
              </li>
              <li>
                <span className="icon">
                  <Timer size={16} weight="fill" />
                </span>
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <span className="icon">
                  <Coffee size={16} weight="fill" />
                </span>
                <span>O café chega fresquinho até você</span>
              </li>
            </ul>
          </div>
          <img src={imgBanner} alt="" />
        </div>
      </BannerContainer>

      <CoffeeContainer>
        <div className="container">
          <h2>Nossos cafés</h2>
          <div className="boxes">
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </div>
        </div>
      </CoffeeContainer>
    </>
  )
}
