import axios from "axios";
import React, { useEffect, useState } from "react";

import useAuth from "../../../Hooks/useAuth";
import AddProductForm from "./AddProductForm/AddProductForm";

const AddProduct = () => {
  const [productData, setProductData] = useState("");
  const [productError, setProductError] = useState({});

  const { user } = useAuth();
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  }, [isSuccess]);

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newProductData = { ...productData };
    newProductData[field] = value;
    setProductData(newProductData);
  };

  const productValidation = (category, mainPrice, discountPrice, quantity) => {
    const error = {};
    if (category === "Select Category") {
      error.category = "Please select a valid category";
    }
    if (parseInt(mainPrice) < 0) {
      error.mainPrice = "Please provide a positive number";
    }
    if (
      parseInt(discountPrice) < 0 ||
      parseInt(discountPrice) > parseInt(mainPrice)
    ) {
      error.discountPrice =
        "Please provide a positive number or less than main price";
    }
    if (quantity < 0) {
      error.quantity = "Provide a valid quantity of product";
    }
    return error;
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const errorMessage = productValidation(
      productData.category,
      productData.mainPrice,
      productData.discountPrice,
      productData.quantity
    );
    const { category, mainPrice, discountPrice, quantity } = errorMessage;

    if (category || mainPrice || discountPrice || quantity) {
      setProductError(errorMessage);
      return;
    } else {
      const discountPercent = parseInt(productData.mainPrice) / 100;
      const discount =
        100 - parseInt(productData.discountPrice) / discountPercent;

      const newProduct = {
        title: productData.title,
        brand: productData.brand,
        description: productData.description,
        imgUrl: productData.imageUrl,
        category: productData.category,
        mainPrice: parseInt(productData.mainPrice),
        discountPrice: parseInt(productData.discountPrice),
        quantity: parseInt(productData.quantity),
        discountPercent: Math.ceil(discount),
        reviews: [],
        uid: user.uid,
      };
      console.log(newProduct);
      axios
        .post("http://localhost:5000/api/products/createProduct", newProduct)
        .then((res) => {
          if (res.data.insertedId) {
            e.target.reset();
            setProductError({});
            setIsSuccess(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-cyan-900 text-center py-3">Add a new Product</h3>
      <AddProductForm
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
        handleProductSubmit={handleProductSubmit}
        handleChange={handleChange}
        productError={productError}
      ></AddProductForm>
    </div>
  );
};

export default AddProduct;
