import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import Product from "./Product";
import { fetchProducts } from "../Actions";

function ProductList() {
  const fetchInfo = useSelector((state) => state.fetchInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchInfo.loading) dispatch(fetchProducts);
  }, [dispatch, fetchInfo.loading]);

  return (
    <>
      <div className="font-sans font-medium h-5/6 bg-gradient-to-r from-gray-100 to-gray-200">
        {!fetchInfo.loading ? (
          <div>
            <section className="flex flex-wrap justify-around pb-10">
              {fetchInfo.products.map((p, index) => (
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
