import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const {_id,image, title, price_min, price_max } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm">
        <figure className="px-4 pt-4">
          <img
            // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            src={image}
            alt="Shoes"
            className="rounded-xl h-60 w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-primary font-bold">
          Price: ${price_min}-{price_max}
          </p>
          <div className="card-actions">
            <Link to={`/productDetails/${_id}`} className="btn btn-secondary w-full outline-[#632EE3]">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
