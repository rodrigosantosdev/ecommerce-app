import Link from "next/link"
import { BiMenuAltLeft } from 'react-icons/bi';
import { MenuHeaderContainer, MenuNav } from "./style"

const NavLinks = [
  {
    name: "Todos os Produtos",
    path: "/",
  },
  {
    name: 'Produto 1',
    path: "/Produto-Category-1",
  },
  {
    name: "Produto 2",
    path: "/Produto-Category-2",
  },
  {
    name: "Produto 3",
    path: "/Produto-Category-3",
  },
  {
    name: 'Produto 4',
    path: "/Produto-Category-4",
  },
  {
    name: 'Produto 5',
    path: "/Produto-Category-5",
  },
  {
    name: 'Produto 6',
    path: "/Produto-Category-6",
  },
]

export default function MenuHeader() {
  return (
    <>
      <MenuHeaderContainer>
        <MenuNav>
          <span>
            <BiMenuAltLeft size={28} />
          </span>
          {NavLinks.map((link, index) => {
            return (
                <li key={index}>
                  <Link href={link.path}>
                    {link.name}
                  </Link>
                </li>
              )
          })}
        </MenuNav>
      </MenuHeaderContainer>
    </>
  )
}
