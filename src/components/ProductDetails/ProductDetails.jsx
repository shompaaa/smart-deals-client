import React, { use, useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const product = useLoaderData();
  const [bids,setBids] = useState([])
  const bidModalRef = useRef(null);
  const { user } = use(AuthContext);
  const {
    _id: productId,
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

  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setBids(data)
      });
  }, [productId]);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const bid = e.target.bid.value;
    console.log(name, email, bid);
    e.target.reset();
    const newBid = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      bid_price: bid,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your bid has been placed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="p-20 bg-[#F5F5F5]">
        {/* Products Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side Content */}
        <div className="left-content">
          <img src={image} className="h-100 w-full mb-7 rounded-xl" alt="" />
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
            <Link to="/" className="flex gap-1 items-center">
              <FaArrowLeft />
              <p>Back To Products</p>
            </Link>
            <h2 className="text-4xl my-4 font-bold">{title}</h2>
            <small className="badge bg-purple-100 text-primary">
              {category}
            </small>
          </div>
          <div className="price bg-white p-6 rounded-xl">
            <p className="text-xl text-green-500 font-bold">
              ${price_min}-{price_max}
            </p>
            <p>Price starts from</p>
          </div>
          <div className="details bg-white p-6 rounded-xl">
            <h4 className="text-2xl font-semibold mb-4">Product Details</h4>
            <p>
              <span className="font-semibold">Product Id:</span> {productId}
            </p>
            <p>
              <span className="font-semibold">Posted: </span>
              {created_at.slice(0, 10)}
            </p>
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
              <p>
                <span className="font-bold">Location:</span> {location}
              </p>
              <p>
                <span className="font-bold">Contact:</span> {seller_contact}
              </p>
              <p>
                <span className="font-bold">Status:</span>{" "}
                <span className="badge bg-amber-400/55">{status}</span>
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={handleBidModalOpen}
              className="btn btn-primary w-full"
            >
              I Want Buy This Product
            </button>
          </div>
          <dialog
            ref={bidModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg text-center">
                Give Seller Your Offered Price!
              </h3>
              <form action="" onSubmit={handleBidSubmit}>
                <fieldset className="fieldset">
                  {/* Name Field */}
                  <label className="label">Buyer Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    defaultValue={user?.displayName}
                  />
                  {/* Email Field */}
                  <label className="label">Buyer Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    defaultValue={user?.email}
                  />
                  {/* Bid Field */}
                  <label className="label">Place Your Bid</label>
                  <input
                    type="text"
                    name="bid"
                    className="input"
                    placeholder="Your Bid here"
                  />
                </fieldset>
                {/* Buttons INSIDE same form */}
                <div className="modal-action">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => bidModalRef.current.close()}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-primary ml-2">
                    Submit Bid
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    {/* Bids for this product */}
    <div className="mt-20">
    <h2 className="text-4xl font-bold"> Bids For This Products: <span className="text-primary">{bids.length}</span></h2>
    </div>
    </div>
  );
};

export default ProductDetails;
