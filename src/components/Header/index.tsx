import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import styles from "./Header.module.scss"

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.box} container`}>
        <img src="/logo.svg" className="logo" alt="Coffee Delivery" />
        <div className={styles.buttons}>
          <button>
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </button>

          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </header>
  )
}
