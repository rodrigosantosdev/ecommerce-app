import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";

const NavLinks = [
  {
    name: "Todos os Produtos",
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

export default function MenuHeader() {
  return (
    <>
      <div className="py-4">
        <nav className="flex items-center list-none gap-4 uppercase">
          <button type="button" className="cursor-pinter">
            <BiMenuAltLeft size={32} />
          </button>
          {NavLinks.map((link, index) => {
            return (
              <ul key={index}>
                <li>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              </ul>
            );
          })}
        </nav>
      </div>
    </>
  );
}
