import React from "react";
import { CartProvider } from "./cart/cartContext";

export default function StoreProvider({ children }) {
  return (
    <React.Fragment>
      <CartProvider>{children}</CartProvider>
    </React.Fragment>
  );
}
