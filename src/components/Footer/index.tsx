import React from "react";
import FooterInfo from "../FooterInfo";
import NewsLetter from "../NewsLetter";

export default function Footer() {
  return (
    <footer className="mt-20">
      <NewsLetter />
      <FooterInfo />
    </footer>
  );
}
