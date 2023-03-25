import { useState } from "react"
import { BsHandbag } from 'react-icons/bs'
import CartSideBar from "../CartSidebar"
import { CartButton, CartContainer, CartIcon, CartText } from "./style"


export default function Cart() {

  const [showSidebar, setShowSidebar] = useState(false)
  const showOpenSidebar = () => setShowSidebar(!showSidebar)


  return (
    <CartContainer>
      <CartButton onClick={showOpenSidebar}>
        <CartIcon>
          <BsHandbag size={24} />
        </CartIcon>
        <CartText>
          <p>Sacola</p>
        </CartText>
        {showSidebar && <CartSideBar />}
      </CartButton>
    </CartContainer>
  )
}
