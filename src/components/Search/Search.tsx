import { BiSearch } from "react-icons/bi";

import { ProductsContext } from "../../context/productContext";
import { useContext, useEffect } from "react";

export default function Search() {
  const { setValue, value, handleFilterProduct } = useContext(ProductsContext);

  useEffect(() => {
    handleFilterProduct();
  }, [value]);

  return (
    <form className="w-1/2 border-2 border-zinc-50 flex items-center gap-2 p-2 pl-4">
      <button type="button">
        <BiSearch size={20} />
      </button>
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Procure seu produto"
        className="w-full p-2"
      />
    </form>
  );
}
