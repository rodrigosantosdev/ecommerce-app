import { createContext, useState } from "react";
import { products } from "../data";
import { useSearch } from "../hooks/useSearch";

type ProductProps = {
  id: number;
  name: string;
  img: string;
  description: string;
  price: number;
  children: React.ReactNode;
};

type valueProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  handleFilterProduct: () => void;
  productsList: ProductProps[];
  productFilter: ProductProps[];
  setProductFilter: React.Dispatch<React.SetStateAction<ProductProps[]>>;
};

export const ProductsContext = createContext<valueProps>({
  value: "",
  setValue: () => {},
  handleFilterProduct: () => {},
  productsList: [],
  productFilter: [],
  setProductFilter: () => {},
});

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [productsList, setProductsList] = useState<any>(products);
  const [productFilter, setProductFilter] = useState<ProductProps[]>([]);

  const [value, setValue] = useState("");
  const { filterProducts } = useSearch(productsList, value);

  function handleFilterProduct() {
    setProductFilter(filterProducts);
  }

  return (
    <ProductsContext.Provider
      value={{
        value,
        setValue,
        productsList,
        productFilter,
        setProductFilter,
        handleFilterProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
