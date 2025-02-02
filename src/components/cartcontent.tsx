"use client"
import {createContext, useContext, useState, ReactNode, useMemo} from "react";

type Product = {
    id: string,
    name: string,
    price: string,
    image : string,
    quantity: number,
};
type CartContextType = {
    cart : Product[],
    cartCount : number,
    addToCart: (product : Product) => void,
    removeFromCart: (id : string ) => void,
    updateQuantity: (id : string, quantity: number) => void,
    clearCart: () => void,
};

export const CartContent = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ( { children } : { children : ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);

//cartCount to optimize and  ensure it update when the cart change
const cartCount = useMemo(()=> cart.reduce((acc,item) => acc + item.quantity, 0 ), [cart]);

const addToCart = (product : Product) => {
    setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === product.id);
        if(existingProduct){
            return prevCart.map((item) => 
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
        }
        return [...prevCart, {...product, quantity: 1 }];
    });
};



const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContent.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContent.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContent);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context

}
