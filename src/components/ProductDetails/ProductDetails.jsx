import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const ProductDetails = () => {
  const product = useLoaderData();
  const {
    _id,
    title,
    category,
    image,
    description,
    condition,
    usage,
    price_min,
    price_max,
    created_at,
    seller_name,
    seller_image,
    email,
    location,
    seller_contact,
    status,
  } = product;
  return (
    <div className="p-20 bg-[#F5F5F5]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Side Content */}
        <div className="left-content">
          <img src={image} className="h-120 w-full mb-7 rounded-xl" alt="" />
          <div className="product description bg-white p-6 rounded-xl">
            <p className="text-2xl font-bold my-6">Product Description</p>
            <div className="flex justify-between">
              <p className="font-bold text-md">
                <span className="text-primary">Condition: </span>
                {condition}
              </p>
              <p className="font-bold text-md">
                <span className="text-primary">Usage Time: </span>
                {usage}
              </p>
            </div>
            <hr className="mt-2 mb-4" />
            <p className="text-md text-gray-500">{description}</p>
          </div>
        </div>
        {/* Right Side Content */}
        <div className="right-content space-y-6">
          <div>
            <Link to="/allProducts" className="flex gap-1 items-center">
              <FaArrowLeft />
              <p>Back To Products</p>
            </Link>
            <h2 className="text-4xl my-4 font-bold">{title}</h2>
            <small className="badge bg-purple-100 text-primary">{category}</small>
          </div>
          <div className="price bg-white p-6 rounded-xl">
            <p className="text-xl text-green-500 font-bold">${price_min}-{price_max}</p>
            <p>Price starts from</p>
          </div>
          <div className="details bg-white p-6 rounded-xl">
            <h4 className="text-2xl font-semibold mb-4">Product Details</h4>
            <p><span className="font-semibold">Product Id:</span> {_id}</p>
            <p><span className="font-semibold">Posted: </span>{created_at.slice(0,10)}</p>
          </div>
          <div className="seller-info bg-white p-6 rounded-xl">
            <div className="flex gap-2 items-center mb-3">
              <div>
                <img src={seller_image} alt="" />
              </div>
              <div>
                <p className="font-bold">{seller_name}</p>
                <p>{email}</p>
              </div>
            </div>
           <div className="space-y-2">
             <p><span className="font-bold">Location:</span> {location}</p>
            <p><span className="font-bold">Contact:</span> {seller_contact}</p>
            <p><span className="font-bold">Status:</span> <span className="badge bg-amber-400/55">{status}</span></p>
           </div>
          </div>
          <div>
            <button className="btn btn-primary w-full">I Want Buy This Product</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
