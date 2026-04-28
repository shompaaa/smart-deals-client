import React, { use } from "react";
import Product from "../Product/Product";
import { Link } from "react-router";

const LatestProducts = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mt-15 mb-10">
        Recent <span className="text-primary">Products</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className="text-center">
        {" "}
        <Link to='/allProducts' className="btn btn-primary mt-10 mb-20">Show All</Link>
      </div>
    </div>
  );
};

export default LatestProducts;
