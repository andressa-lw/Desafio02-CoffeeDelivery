import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react"
import imgBanner from "../../assets/img-coffee-banner.png"

import styles from "./Banner.module.scss"

export function Banner() {
  return (
    <section className={styles.banner}>
      <div className={`${styles.box} container`}>
        <div className={styles.texts}>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <span className={styles.icon}>
                <ShoppingCart size={16} weight="fill" />
              </span>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <span className={styles.icon}>
                <Package size={16} weight="fill" />
              </span>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <span className={styles.icon}>
                <Timer size={16} weight="fill" />
              </span>
              <span>Compra simples e segura</span>
            </li>
            <li>
              <span className={styles.icon}>
                <Coffee size={16} weight="fill" />
              </span>
              <span>Compra simples e segura</span>
            </li>
          </ul>
        </div>
        <img src={imgBanner} alt="" />
      </div>
    </section>
  )
}
