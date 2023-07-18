const ProductModel = require("../models/product");

const addProduct = async (productData) => {
  try {
    const newProduct = new ProductModel(productData);
    const data = await newProduct.save();
    return data;
  } catch (err) {
    throw err;
  }
};
const updateProduct = async (productData) => {
  try {
    const product = new ProductModel({
      _id: productData._id,
      seller_id: productData.seller_id,
    });
    if (!product) throw { message: "No product found." };
    productData.name && (product.name = productData.name);
    productData.description && (product.description = productData.description);
    productData.old_price && (product.old_price = productData.old_price);
    productData.new_price && (product.new_price = productData.new_price);
    productData.details && (product.details = productData.details);
    productData.photos && (product.photos = productData.photos);

    const data = await product.save();
    return data;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  addProduct,
  updateProduct,
};
