import React from 'react'
import { BaseButton, SearchContainer } from "./style"
import { BiSearch } from 'react-icons/bi'

export default function Search() {
  return (
    <SearchContainer>
      <BaseButton>
        <BiSearch size={20} />
      </BaseButton>
      <input type="search" name="" id="" placeholder="Procure seu produto" />
    </SearchContainer>
  )
}
