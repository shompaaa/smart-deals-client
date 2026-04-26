import React from "react";
import { BiBold } from "react-icons/bi";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 px-20">
        <aside className="max-w-xs">
          <Link to="/" className="text-xl font-bold">
            Smart<span className="text-primary">Deals</span>
          </Link>
          <p>
            Your trusted marketplace for authentic local products. Discover the
            best deals from across Bangladesh.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <Link to="/allProducts" className="link link-hover">
            All Products
          </Link>
          <Link to="/dashboard" className="link link-hover">
            Dashboard
          </Link>
          <Link to="/login" className="link link-hover">
            Login
          </Link>
          <Link to="/register" className="link link-hover">
            Register
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Categories</h6>
          <Link to="/categories" className="link link-hover">
            Electronics
          </Link>
          <Link to="/fashion" className="link link-hover">
            Fashion
          </Link>
          <Link to="/homeAndLiving" className="link link-hover">
            Home & Living
          </Link>
          <Link to="/groceries" className="link link-hover">
            Groceries
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Contact & Support</h6>
          <div className="flex justify-center items-center gap-1">
            <CiMail size={17} />
            <p>support@smart-deals.com</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <CiPhone size={17} />
            <p>+88012345678</p>
          </div>
          <div className="flex justify-center items-center gap-1">
            <CiLocationOn size={17} />
            <p>123 Commerce Street, Dhaka, Bangladesh</p>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="flex gap-4">
            <FaXTwitter size={20} />
            <FaLinkedin size={20} />
            <FaFacebook size={20} />
          </div>
        </nav>
      </footer>
      <div className="footer sm:footer-horizontal bg-neutral text-neutral-content">
        <small className="mx-auto text-gray-400">&copy; {new Date().getFullYear()} Smart Deals. All right reserved</small>
      </div>
    </div>
  );
};

export default Footer;
