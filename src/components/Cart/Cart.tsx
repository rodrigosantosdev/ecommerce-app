import { BsHandbag } from 'react-icons/bs'
import { CartContainer, CartIcon, CartText } from "./style"

export default function Cart() {
  return (
    <CartContainer>
      <CartIcon>
        <BsHandbag size={24} />
      </CartIcon>
      <CartText>
        <p>Seu Carrinho</p>
        <span>R$ 0,00</span>
      </CartText>
    </CartContainer>
  )
}
