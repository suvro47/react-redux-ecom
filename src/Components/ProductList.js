import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import Product from "./Product";
import { fetchProducts } from "../Actions";

function ProductList() {
  const [isLoading, setIsLoading] = useState(false);

  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  return (
    <>
      <div className="h-auto font-sans font-medium bg-gradient-to-r from-gray-100 to-gray-200">
        {!isLoading ? (
          <div>
            <section className="flex flex-wrap justify-around pb-10">
              {products.map((p, index) => (
                <Product key={index} props={p} />
              ))}
            </section>
          </div>
        ) : (
          <div className="w-20 h-screen m-auto mt-40">
            <Loader type="Bars" color="#00BFFF" height={80} width={100} />
          </div>
        )}
      </div>
    </>
  );
}

export default ProductList;
