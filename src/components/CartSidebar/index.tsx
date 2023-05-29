import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
export default function CartSideBar() {
  const { cartItems, removeItemFromCart, clearCart } = useContext(StoreContext);

  return (
    <div className="bg-zinc-200 w-80">
      <div>
        <span>Meu Carrinho</span>
        {cartItems.map((item: any) => (
          <>
            <div key={item.id}>{item.name}</div>
            <p>{item.description}</p>
            <span>R$ {item.price}</span>
            <button onClick={() => removeItemFromCart(item.id)}>X</button>
          </>
        ))}

        <div onClick={() => clearCart()} className="bg-red-500 text-white">
          Limpar Sacola
        </div>
      </div>
    </div>
  );
}
