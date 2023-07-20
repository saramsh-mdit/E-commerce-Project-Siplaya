const findIndex = (list, id) => {
  return list.find((items) => items.product_id === id);
};

export const cartReducer = (state, action) => {
  if (action.type === "add") {
    const found = findIndex(
      state.cartItems,
      action?.payload?.cartItem?.product_id
    );
    if (found) {
      return state;
    } else {
      const newState = [...state.cartItems, action?.payload?.cartItem];

      return newState;
    }
  } else if (action.type === "remove") {
    const newState = {
      ...state,
      cartItems: state?.filter(
        (item) => item.product_id !== action.payload.product_id
      ),
    };
    return newState;
  } else if (action.type === "inc") {
    const newState = state?.map((item) => {
      if (item.product_id == action.payload.product_id) {
        return {
          ...item,
          quantity: Math.min(item.quantity + 1, 100),
        };
      } else {
        return item;
      }
    });

    return newState;
  } else if (action.type === "dec") {
    const newState = state?.map((item) => {
      if (item.product_id == action.payload.product_id) {
        return {
          ...item,
          quantity: Math.max(item.quantity - 1, 0),
        };
      } else {
        return item;
      }
    });

    return newState;
  }
};
