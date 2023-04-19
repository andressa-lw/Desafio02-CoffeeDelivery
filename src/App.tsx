import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"

import { GlobalStyle } from "./styles/globals"
import { defaultTheme } from "./styles/themes/default"
import { CartContextProvider } from "./contexts/CartContext"

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
