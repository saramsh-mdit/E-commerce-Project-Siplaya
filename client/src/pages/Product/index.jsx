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

import style from "./style.module.scss";

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
        <section className={style.productDetails}>
          <div className={style.product_image}>
            {data?.photos?.map((item) => {
              return (
                <div
                  key={item}
                  className="img"
                >
                  <img
                    src={URLS.imagePath + item}
                    alt={data?.name ?? ""}
                  />
                </div>
              );
            })}
          </div>
          <div className={style.product_info}>
            <div className={style.info_main}>
              <Title size="lg">{data?.name ?? ""}</Title>
              <del>
                <Text>Rs:{data?.old_price}</Text>
              </del>
              <Title>
                Rs:{data?.new_price}{" "}
                <span className={style.discount}>{discount} %</span>
              </Title>
            </div>
            <div className={style.productDetailsSection}>
              <Text size="lg">Product Details</Text>
              {data?.details?.map((item) => {
                return <Text key={item}> - {item}</Text>;
              })}
            </div>
            <div className={style.controls}>
              <Button onClick={onClickHandler}>Add To Cart</Button>
            </div>
            <div>
              <Text size="lg">Product Description</Text>
              <Text>{data?.description}</Text>
            </div>
          </div>
        </section>
      )}
    </MainContainer>
  );
};

export default ProductPage;
