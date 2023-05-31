import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
export default function CartSideBar() {
  const { cartItems, removeItemFromCart, clearCart } = useContext(StoreContext);

  return (
    <div className="p-4">
      <span className="text-2xl">Meu Carrinho</span>
      <div className="flex flex-col gap-4 mt-4">
        {cartItems.map((item: any) => (
          <>
            <div key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <div className="w-full flex jbustify-between gap-4">
                <h2 className="w-full">R$ {item.price}</h2>
                <button
                  type="button"
                  onClick={() => removeItemFromCart(item.id)}
                >
                  X
                </button>
              </div>
            </div>
          </>
        ))}

        <div
          onClick={() => clearCart()}
          className="bg-red-500 text-blue-900 cursor-pointer"
        >
          Limpar Sacola
        </div>
      </div>
    </div>
  );
}
