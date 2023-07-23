import React from "react";
import MainContainer from "../../layout/main";
import Title from "./../../components/global/Title/index";
import { CartContext } from "../../store/cart/cartContext";

const CartPage = () => {
  const { value, dispatch, inc, dec } = React.useContext(CartContext);
  React.useEffect(() => {
    console.log(value);
  }, [value]);
  return (
    <MainContainer>
      <Title size="lg">Cart</Title>

      <button
        onClick={() =>
          dispatch({
            type: "add",
            payload: {
              cartItem: {
                product_id: 13,
                name: "Product Name 3",
                price: 35,
                quantity: 0,
              },
            },
          })
        }
      >
        Add To Cart
      </button>

      <table>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Name</th>
            <th>Price</th>
            <th>Option</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {value
            ? value?.map((item, index) => {
                return (
                  <tr key={item?.product_id}>
                    <td>{index + 1}</td>
                    <td>{item?.name}</td>
                    <td>{item?.price}</td>
                    <td>
                      <div className="options">
                        <button onClick={() => dec(item?.product_id)}>-</button>
                        <button onClick={() => inc(item?.product_id)}>+</button>

                        <button
                          onClick={() =>
                            dispatch({
                              type: "remove",
                              payload: {
                                product_id: item?.product_id,
                              },
                            })
                          }
                        >
                          Del
                        </button>
                      </div>
                    </td>
                    <td>{item?.quantity}</td>
                    <td>Rs:{item?.quantity * item?.price}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </MainContainer>
  );
};

export default CartPage;
