import React from "react";
import bgHeroLeft from "../../assets/bg-hero-left.png";
import bgHeroRight from "../../assets/bg-hero-right.png";

const Hero = () => {
  return (
    <div
      className="mx-auto text-center py-24"
      style={{
        backgroundImage: `
      url(${bgHeroLeft}),
      url(${bgHeroRight}),
      linear-gradient(to right, rgba(240,240,255,0.9), rgba(220,255,255,0.9))
    `,
        backgroundPosition: "left center, right center, center",
        backgroundSize: "200px, 200px, cover",
        backgroundRepeat: "no-repeat, no-repeat, no-repeat",
      }}
    >
      {/* LEFT SHAPE */}
      <div className="absolute left-0 top-0 w-72 h-72 bg-[#FFE6FD] opacity-20 blur-3xl rounded-full"></div>

      {/* RIGHT SHAPE */}
      <div className="absolute right-0 bottom-0 w-72 h-72 bg-[#E0F8F5] opacity-20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-5xl w-4/7 mx-auto font-bold">
          Deal Your <span className="text-primary">Products</span> In A{" "}
          <span className="text-primary">Smart</span> Way!
        </h1>

        <p className="text-md text-[#627382] my-4">
          SmartDeals helps you sell, resell, and shop from trusted local sellers
          — all in one place!
        </p>

        {/* Search Box */}
        <label className="input mb-8 rounded-full w-full max-w-xl mx-auto flex items-center gap-2 shadow-md">
          <input
            type="search"
            className="grow"
            placeholder="Search for Products, Categories..."
          />
          <svg
            className="h-[1.3em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        </label>

        {/* Buttons */}
        <div className="space-x-3">
          <button className="btn btn-primary">Watch All Products</button>
          <button className="btn outline-[#632EE3] btn-secondary">
            Post An Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
