import React from "react";
import LogoSvg from "../../assets/svg/LogoSvg";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <LogoSvg />
    </Link>
  );
}
