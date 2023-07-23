import React, { useContext } from "react";
import MainContainer from "./../../layout/main";
import useApi from "../../hooks/useApi";
import { getProductById } from "../../api/product";
import { useParams } from "react-router-dom";
import Title from "../../components/global/Title";
import Text from "../../components/global/Text";
import URLS from "../../constant/urls";
import Button from "../../components/global/Button";
import { CartContext } from "../../store/cart/cartContext";

const ProductPage = () => {
  const { product_id } = useParams();
  const { dispatch } = useContext(CartContext);

  const { isLoading, isError, data } = useApi(() => getProductById(product_id));

  const onClickHandler = () =>
    dispatch({
      type: "add",
      payload: {
        cartItem: {
          product_id: data?._id,
          name: data?.name ?? "",
          price: data?.new_price ?? "",
          quantity: 1,
        },
      },
    });

  let discount = 0;
  if (data) {
    discount = ((data?.old_price - data?.new_price) / data?.old_price) * 100;
  }

  return (
    <MainContainer>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <section>
          <div>
            {data?.photos?.map((item) => {
              return (
                <img
                  key={item}
                  src={URLS.imagePath + item}
                  alt={data?.name ?? ""}
                />
              );
            })}
          </div>
          <Title>{data?.name ?? ""}</Title>
          {data?.details?.map((item) => {
            <Text key={item}>{item}</Text>;
          })}

          <Text>{data?.description}</Text>

          <del>
            <Text>Rs:{data?.old_price}</Text>
          </del>
          <Text size="lg">
            Rs:{data?.new_price} <b>{discount} %</b>
          </Text>

          <Button onClick={onClickHandler}>Add To Cart</Button>
        </section>
      )}
    </MainContainer>
  );
};

export default ProductPage;
