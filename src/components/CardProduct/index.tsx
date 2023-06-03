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
    <div
      key={item.id}
      className="shadow-sm border-[1px] border-blue-50 p-4 flex flex-col justify-between"
    >
      <div onClick={() => router.push(`${item.id}`)}>
        <img src={item.img} alt={item.name} />
      </div>
      <div>
        <h1 className="text-2xl">{item.name}</h1>
        <p className="text-md my-4">
          <p>{item.description}</p>
        </p>
        <div className="flex justify-between items-center w-full mt-4">
          <span className="font-semibold text-xl">R$ {item.price}</span>
          <button
            type="button"
            onClick={() => handleAddItem(item)}
            className="cursor-pointer bg-gray-800 text-white py-1 px-2 rounded-lg hover:bg-gray-700 transition-all"
          >
            Adiciona à Sacola
          </button>
        </div>
      </div>
    </div>
  );
};
