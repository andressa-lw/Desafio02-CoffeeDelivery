import { Outlet } from "react-router-dom"
import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom"

import { HeaderContainer } from "./styles"

import logoCoffee from "../assets/logo.svg"
import { useCart } from "../hooks/useCart"

export function DefaultLayout() {
  const { cartQuantity } = useCart()
  return (
    <>
      <HeaderContainer>
        <div className="container">
          <NavLink to="/">
            <img src={logoCoffee} className="logo" alt="Coffee Delivery" />
          </NavLink>
          <div className="buttons">
            <button>
              <MapPin size={22} weight="fill" />
              <span>Porto Alegre, RS</span>
            </button>

            <NavLink to="/checkout" title="Carrinho">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
          </div>
        </div>
      </HeaderContainer>

      <Outlet />
    </>
  )
}
