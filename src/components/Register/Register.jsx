import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

const Register = () => {

    const {signInWithGoogle} = use(AuthContext)

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
        })
        .then(error =>{
            console.log(error);
        })
    }


  return (
    <div className="card bg-base-100 w-full mx-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <h1 className="text-4xl text-center font-bold">Register Now</h1>
      <div className="card-body">
        <fieldset className="fieldset">
          {/* Name Field */}
          <label className="label">Full Name</label>
          <input type="text" className="input" placeholder="Full Name" />
          {/* Email Field */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* Password Field */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          {/* Confirm Password Field */}
          <label className="label">Confirm Password</label>
          <input
            type="password"
            className="input"
            placeholder="Confirm Password"
          />
          <button className="btn btn-neutral mt-4">Register</button>
          <p className="text-center">
            Already have an account? Please{" "}
            <Link to='/login' className="text-blue-500 font-bold">Login</Link>
          </p>
          {/* Google */}
          <button
          onClick={handleGoogleSignIn}
           className="btn bg-white text-black border-[#e5e5e5]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Register;
