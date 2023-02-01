import React from 'react'
import Logo from "../Logo/Logo"
import SocialLinks from "../SocialLinks"
import { FooterInfoBox, FooterInfoContainer } from "./style"

export default function FooterInfo() {
  return (
    <FooterInfoContainer>
      <FooterInfoBox>
        <Logo />
        <SocialLinks />
      </FooterInfoBox>
      <FooterInfoBox>
        Links
      </FooterInfoBox>
      <FooterInfoBox>
        Pagamentos
      </FooterInfoBox>
    </FooterInfoContainer>
  )
}
