import React from 'react'
import FooterInfo from "../FooterInfo"
import NewsLetter from "../NewsLetter"

export default function Footer() {
  return (
    <footer>
      <NewsLetter />
      <FooterInfo />
      <p>
        Todos os direitos reservados...
      </p>
    </footer>
  )
}
