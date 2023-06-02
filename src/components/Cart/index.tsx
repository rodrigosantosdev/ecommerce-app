import { BsHandbag } from "react-icons/bs";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import Link from "next/link";

export default function Cart() {
  const { cartItems } = useContext(StoreContext);

  return (
    <div>
      <Link href="/sacola" className="relative bg-red-500">
        <div>
          <BsHandbag size={32} />
        </div>
        <div>
          <span className="bg-red text-white rounded-full px-2 absolute top-4 -right-2">
            {cartItems.length}
          </span>
        </div>
      </Link>
    </div>
  );
}
