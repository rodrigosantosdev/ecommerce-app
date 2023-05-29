import { useState } from "react"
import { BsHandbag } from 'react-icons/bs'
import CartSideBar from "../CartSidebar"


export default function Cart() {

  const [showSidebar, setShowSidebar] = useState(false)
  const showOpenSidebar = () => setShowSidebar(!showSidebar)


  return (
    <div>
      <button onClick={showOpenSidebar}>
        <div>
          <BsHandbag size={24} />
        </div>
        <div>
          <p>Sacola</p>
        </div>
        {showSidebar && <CartSideBar />}
      </button>
    </div>
  )
}
