import { useState } from "react";
import { BsHandbag } from "react-icons/bs";
import CartSideBar from "../CartSidebar";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

export default function Cart() {
  const { cartItems } = useContext(StoreContext);
  const [showSidebar, setShowSidebar] = useState(false);
  const showOpenSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div>
      <button type="button" className="relative bg-red-500">
        <div onClick={showOpenSidebar}>
          <BsHandbag size={32} />
        </div>
        <div>
          <span className="bg-red text-white rounded-full px-2 absolute top-4 -right-2">
            {cartItems.length}
          </span>
        </div>
      </button>
      <div className="bg-blue-100 z-20 w-full h-full">
        {showSidebar && <CartSideBar />}
      </div>
    </div>
  );
}
