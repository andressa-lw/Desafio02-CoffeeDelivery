import styles from "./Coffee.module.scss"

import imgCoffee from "../../assets/expresso-tradicional.png"
import { ShoppingCart } from "@phosphor-icons/react"

export function Coffee() {
  return (
    <section className={styles.coffee}>
      <div className="container">
        <h2>Nossos cafés</h2>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <img src={imgCoffee} alt="" />
            <div className={styles.tags}>
              <span className={styles.tag}>Tradicional</span>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className={styles.bottom}>
              <span className={styles.price}>
                <small>R$</small> 9,90
              </span>
              <span className={styles.qtd}>
                <button>-</button>
                <input type="text" name="" id="" value="1" />
                <button>+</button>
              </span>
              <button className={styles.cart}>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </div>
          </div>
          <div className={styles.box}>
            <img src={imgCoffee} alt="" />
            <div className={styles.tags}>
              <span className={styles.tag}>Tradicional</span>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className={styles.bottom}>
              <span className={styles.price}>
                <small>R$</small> 9,90
              </span>
              <span className={styles.qtd}>
                <button>-</button>
                <input type="text" name="" id="" value="1" />
                <button>+</button>
              </span>
              <button className={styles.cart}>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </div>
          </div>
          <div className={styles.box}>
            <img src={imgCoffee} alt="" />
            <div className={styles.tags}>
              <span className={styles.tag}>Tradicional</span>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className={styles.bottom}>
              <span className={styles.price}>
                <small>R$</small> 9,90
              </span>
              <span className={styles.qtd}>
                <button>-</button>
                <input type="text" name="" id="" value="1" />
                <button>+</button>
              </span>
              <button className={styles.cart}>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </div>
          </div>
          <div className={styles.box}>
            <img src={imgCoffee} alt="" />
            <div className={styles.tags}>
              <span className={styles.tag}>Tradicional</span>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className={styles.bottom}>
              <span className={styles.price}>
                <small>R$</small> 9,90
              </span>
              <span className={styles.qtd}>
                <button>-</button>
                <input type="text" name="" id="" value="1" />
                <button>+</button>
              </span>
              <button className={styles.cart}>
                <ShoppingCart size={22} weight="fill" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
