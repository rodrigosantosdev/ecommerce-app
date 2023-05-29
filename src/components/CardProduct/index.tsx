import { useRouter } from "next/router";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

export const CardProduct = ({ item }: any) => {
  const { addItemToCart } = useContext(StoreContext);
  const router = useRouter();

  function handleAddItem(item: any) {
    addItemToCart(item);
  }

  return (
    <div key={item.id} className="shadow-sm border-[1px] border-blue-50 p-4">
      <div>
        <div onClick={() => router.push(`${item.id}`)}>
          <img src={item.img} alt={item.name} />
        </div>
        <div>
          <div>{item.name}</div>
          <div>
            <p>{item.description}</p>
          </div>
          <div>R$ {item.price}</div>
          <div onClick={() => handleAddItem(item)} className="cursor-pointer">
            Adiciona à Sacola
          </div>
        </div>
      </div>
    </div>
  );
};
