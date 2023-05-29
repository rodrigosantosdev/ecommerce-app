import { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import CartSideBar from "../CartSidebar";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

export default function Cart() {
  const { cartItems } = useContext(StoreContext);
  const [showSidebar, setShowSidebar] = useState(false);
  const showOpenSidebar = () => setShowSidebar(!showSidebar);

  console.log(cartItems);

  return (
    <div>
      <button className="relative">
        <div onClick={showOpenSidebar}>
          <BsHandbag size={32} />
        </div>
        <div>
          <span className="bg-red-500 text-white rounded-full px-2 absolute top-4 right-1">
            {cartItems.length}
          </span>
        </div>
        <p className="mt-2">Sacola</p>
        {showSidebar && <CartSideBar />}
      </button>
    </div>
  );
}
