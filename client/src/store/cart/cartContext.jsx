import React from "react";
import { cartReducer } from "./reducer";

export const CartContext = React.createContext({
  value: {},
  dispatch: () => {},
});

export const defaultCart = [
  { product_id: 11, name: "Product Name 1", price: 1500, quantity: 10 },
  { product_id: 12, name: "Product Name 2", price: 500, quantity: 0 },
  { product_id: 13, name: "Product Name 3", price: 35, quantity: 0 },
];

export const CartProvider = ({ children }) => {
  const [value, dispatch] = React.useReducer(cartReducer, defaultCart);

  React.useEffect(() => {
    console.log("State Updated", value?.cartItems);
  }, [value]);

  const inc = (product_id) => {
    dispatch({
      type: "inc",
      payload: {
        product_id: product_id,
      },
    });
  };
  const dec = (product_id) => {
    dispatch({
      type: "dec",
      payload: {
        product_id: product_id,
      },
    });
  };

  return (
    <CartContext.Provider value={{ value, dispatch, inc, dec }}>
      {children}
    </CartContext.Provider>
  );
};
