import React from 'react'
import Cart from "../Cart/Cart"
import Login from "../Login/Login"
import Logo from "../Logo/Logo"
import Search from "../Search/Search"
import { HeaderContainer } from "./style"

export default function TheHeader() {
  return (
    <HeaderContainer>
      <Logo />
      <Search />
      <Cart />
      <Login />
    </HeaderContainer>
  )
}
