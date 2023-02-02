import Link from "next/link"
import { useState } from "react"
import { RxPerson } from 'react-icons/rx'
import Modal from "../Modal"
import TabNavigator from "../TabNavigator"

import {
  LoginContainer,
  LoginIcon,
  LoginModalButton,
  LoginText, 
} from "./style"

export default function Login() {

  const [isOpen, setIsOpen] = useState(false)

  const OpenModal = () => {
    setIsOpen(true)
  }

  return (
    <LoginContainer>
      <LoginIcon>
        <RxPerson size={24} />
      </LoginIcon>
      <LoginText>
        <Link href="#">
          <LoginModalButton onClick={OpenModal}>
            Login / Cadastre-se
          </LoginModalButton>
        </Link>
        <Modal isOpen={isOpen} setIsOpen={() => setIsOpen(!setIsOpen)}>
          <TabNavigator />
        </Modal>
      </LoginText>
    </LoginContainer>
  )
}
