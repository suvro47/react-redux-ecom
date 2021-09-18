import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Product from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        return (
          <>
            <div className="flex flex-col items-center mt-48">
              <h1> Network Error </h1>
            </div>
          </>
        );
      });
    setIsLoading(true);
  }, []);

  return (
    <>
      {!isLoading ? (
        <div>
          <section className="flex flex-wrap justify-around pb-10">
            {products.map((p, index) => (
              <Product key={index} props={p} />
            ))}
          </section>
        </div>
      ) : (
        <div className="w-20 m-auto">
          <Loader type="Bars" color="#00BFFF" height={80} width={100} />
        </div>
      )}
    </>
  );
}

export default ProductList;
