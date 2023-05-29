import React from 'react'
import Cart from "../Cart"
import Logo from "../Logo/Logo"
import Search from "../Search/Search"

export default function TheHeader() {
  return (
    <header className="flex justify-between items-center gap-8 p-4">
      <Logo />
      <Search />
      <Cart />
    </header>
  )
}
