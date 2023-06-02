import { createContext, useState } from "react";

type IProps = {
  children: React.ReactNode;
};

export const StoreContext = createContext<any>([]);

export const GlobalProvider = ({ children }: IProps) => {
  const [cartItems, setCartItems] = useState<any>([]);

  const addItemToCart = (item: any) => {
    setCartItems((prevItems: any) => [...prevItems, item]);
  };

  const removeItemFromCart = (itemId: string) => {
    setCartItems((prevItems: any) =>
      prevItems.filter((item: any) => item.id !== itemId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        setCartItems,
        addItemToCart,
        removeItemFromCart,
        clearCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
