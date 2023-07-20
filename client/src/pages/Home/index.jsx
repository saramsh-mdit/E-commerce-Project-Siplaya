import React from "react";

import MainContainer from "../../layout/main";
import Button from "../../components/global/Button";
import Title from "../../components/global/Title";
import Text from "../../components/global/Text";
import ProductCard from "../../components/Cards/Product";
import { getAllProduct } from "../../api/product";

import style from "./style.module.scss";

const HomePage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const [data, setData] = React.useState();

  const apiCall = async () => {
    try {
      const response = await getAllProduct();
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  React.useEffect(() => {
    if (isLoading && !data) {
      apiCall();
    }
  }, []);

  return (
    <MainContainer>
      <Title size="lg">HomePage</Title>
      <Text>Lorem ipsum dolor sit amet.</Text>

      <Button>This is a button</Button>
      <article className={style.productsList}>
        {data
          ? data?.map((productDetail) => {
              return (
                <ProductCard
                  key={productDetail._id}
                  title={productDetail.name}
                  description={productDetail.description}
                  oldPrice={productDetail.old_price}
                  newPrice={productDetail.new_price}
                  imageURLs={productDetail.photos}
                />
              );
            })
          : null}
      </article>
    </MainContainer>
  );
};

export default HomePage;
