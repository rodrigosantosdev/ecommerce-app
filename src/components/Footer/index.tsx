import React from 'react'
import FooterInfo from "../FooterInfo"
import NewsLetter from "../NewsLetter"
import { CopyRight, FooterContainer } from "./style"

export default function Footer() {
  return (
    <FooterContainer>
      <NewsLetter />
      <FooterInfo />
      <CopyRight>
        Todos os direitos reservados...
      </CopyRight>
    </FooterContainer>
  )
}
