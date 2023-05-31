import React from "react";
import FooterInfo from "../FooterInfo";
import NewsLetter from "../NewsLetter";

export default function Footer() {
  return (
    <footer>
      <NewsLetter />
      <FooterInfo />
      <p className="text-center my-8">Todos os direitos reservados...</p>
    </footer>
  );
}
