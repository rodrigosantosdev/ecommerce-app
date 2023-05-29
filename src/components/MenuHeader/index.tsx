import { useState } from 'react'
import Link from "next/link"
import { BiMenuAltLeft } from 'react-icons/bi';
import MegaMenu from "../MegaMenu";

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

  const [megaMenu, setMegaMenu] = useState(false)

  function handleMegaMenu() {
    setMegaMenu(!megaMenu)
  }
 
  return (
    <>
      <div className="p-4">
        <nav className="flex items-center list-none gap-4 uppercase">
          <button type="button" onClick={handleMegaMenu} className="cursor-pinter">
            <BiMenuAltLeft size={32} />
          </button>
          {NavLinks.map((link, index) => {
            return (
                <li key={index}>
                  <Link href={link.path}>
                    {link.name}
                  </Link>
                </li>
              )
          })}
        </nav>
      </div>
      {megaMenu && <MegaMenu /> }
    </>
  )
}
