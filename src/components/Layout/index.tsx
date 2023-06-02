import { GlobalProvider } from "../../context/storeContext";
import { ProductsProvider } from "../../context/productContext";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <GlobalProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </GlobalProvider>
  );
};
