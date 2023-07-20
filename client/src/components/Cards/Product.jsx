import React from "react";
import Title from "../global/Title";
import Text from "../global/Text";

import style from "./style.module.scss";

const defaultImage = "public/images/defaultImage.png";
const defaultTitle = `Product ${parseInt((Math.random() * 100) % 100)}`;
const randomPrice = parseInt((Math.random() * 100) % 1000);

const ProductCard = ({
  title,
  imageURLs,
  product_id,
  oldPrice,
  newPrice,
  imageURL,
}) => {
  return (
    <div className={style.productCard}>
      <div className="img">
        <img
          src={
            imageURLs && imageURLs?.length
              ? `http://localhost:3500/product/${imageURLs[0]}`
              : defaultImage
          }
          alt=""
        />
      </div>
      <div className={style.productCardInfo}>
        <Title size="sm">{title ?? defaultTitle}</Title>

        <del>
          <Text size="sm">Old Price: Rs {oldPrice ?? randomPrice}/-</Text>
        </del>

        <Text size="md">Price: Rs {newPrice ?? randomPrice}/-</Text>
      </div>
    </div>
  );
};

export default ProductCard;
