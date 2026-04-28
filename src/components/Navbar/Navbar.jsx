import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
import './Navbar.css'

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOutUser = ()=>{
    signOutUser()
    .then()
    .catch()
  }

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProducts">All Products</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/myProducts">My Products</NavLink>
          </li>
          <li>
            <NavLink to="/myBids">My Bids</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-15 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to='/' className="text-2xl font-bold gap-0">
          Smart<span className="text-primary">Deals</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3" >
        {user ? (
          ""
        ) : (
          <div className="">
            <NavLink to="/register" className="btn btn-primary">
              Register
            </NavLink>
          </div>
        )}
        <div className="">
          {user ? (
            <NavLink onClick={handleSignOutUser} to="/" className="btn btn-primary">
              Logout
            </NavLink>
          ) : (
            <NavLink to="/login" className="btn btn-secondary outline-[#632EE3]">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
