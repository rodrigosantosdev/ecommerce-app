import React from "react";
import Logo from "../Logo/Logo";
import SocialLinks from "../SocialLinks";
import Link from "next/link";

const NavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Tenis",
    path: "?category=tenis",
  },
  {
    name: "Camisetas",
    path: "?category=camisetas",
  },
];

export default function FooterInfo() {
  return (
    <section className="flex justify-between my-8">
      <div className="flex flex-col gap-8">
        <Logo />
        <SocialLinks />
      </div>
      <div>
        {NavLinks.map((link, index) => {
          return (
            <ul key={index}>
              <li>
                <Link href={link.path}>{link.name}</Link>
              </li>
            </ul>
          );
        })}
      </div>
      <div>Pagamentos</div>
    </section>
  );
}
